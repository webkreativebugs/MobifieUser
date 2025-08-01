import { LogTypeEnum } from "../enum/Logging.enum";

const getCallerDetails = ():
  | { className: string; methodName: string; lineNumber: string }
  | string => {
  const stack = new Error().stack;
  if (stack) {
    const lines = stack.split("\n");
    const callerLine = lines[3] || ""; // Adjust index based on call depth
    const match =
      callerLine.match(/at (.*?) \((.*?):(\d+):\d+\)$/) ||
      callerLine.match(/at (.*?):(\d+):\d+$/);

  if (match) {
      let methodName = match[1] || "anonymous";
      let filePath = match[2] || match[1];
      let lineNumber = match[3] || "unknown";

      // Extract class name from file path (if available)
      let className =
        filePath.split("/").pop()?.split(".")[0] || "UnknownClass";

      return {
        className,
        methodName,
        lineNumber,
      };
    }
  }
  return "UnknownCaller";
};

const getTimestamp = (): string => {
  return new Date().toISOString();
};

// 🎯 Add emojis for different log types
const logEmojis: Record<LogTypeEnum, string> = {
  [LogTypeEnum.LOG]: "📝",
  [LogTypeEnum.ERROR]: "❌",
  [LogTypeEnum.WARN]: "⚠️",
  [LogTypeEnum.DEBUG]: "🐛",
  [LogTypeEnum.INFO]: "ℹ️",
  [LogTypeEnum.TRACE]: "🔍",
  [LogTypeEnum.TABLE]: "📊",
  [LogTypeEnum.ASSERT]: "✅",
  [LogTypeEnum.TIME]: "⏳",
  [LogTypeEnum.TIME_END]: "⌛",
};

// 🎯 ANSI Colors for Terminal Backgrounds
const COLORS = {
  RESET: "\x1b[0m",
  BLACK_BG_WHITE_TEXT: "\x1b[30;47m",
  RED_BG_WHITE_TEXT: "\x1b[31;47m",
  YELLOW_BG_BLACK_TEXT: "\x1b[30;43m",
  BLUE_BG_WHITE_TEXT: "\x1b[34;47m",
  CYAN_BG_BLACK_TEXT: "\x1b[30;46m",
  MAGENTA_BG_WHITE_TEXT: "\x1b[35;47m",
  GREEN_BG_BLACK_TEXT: "\x1b[30;42m",
  PURPLE_BG_WHITE_TEXT: "\x1b[35;47m",
};

// 🎨 Map Log Types to Colors
export const logColors: Record<LogTypeEnum, string> = {
  [LogTypeEnum.LOG]: COLORS.BLACK_BG_WHITE_TEXT,
  [LogTypeEnum.ERROR]: COLORS.RED_BG_WHITE_TEXT,
  [LogTypeEnum.WARN]: COLORS.YELLOW_BG_BLACK_TEXT,
  [LogTypeEnum.DEBUG]: COLORS.BLUE_BG_WHITE_TEXT,
  [LogTypeEnum.INFO]: COLORS.CYAN_BG_BLACK_TEXT,
  [LogTypeEnum.TRACE]: COLORS.MAGENTA_BG_WHITE_TEXT,
  [LogTypeEnum.TABLE]: COLORS.GREEN_BG_BLACK_TEXT,
  [LogTypeEnum.ASSERT]: COLORS.GREEN_BG_BLACK_TEXT,
  [LogTypeEnum.TIME]: COLORS.PURPLE_BG_WHITE_TEXT,
  [LogTypeEnum.TIME_END]: COLORS.PURPLE_BG_WHITE_TEXT,
};

export const mudranLog = (type: LogTypeEnum, ...args: any[]): void => {
  console.log("\n=======================================================");

  const emoji = logEmojis[type] || "❌";
  const timestamp = getTimestamp();
  const callerDetails = getCallerDetails();

  console.log(`${emoji} Log Type    :`, type);
  console.log(`${emoji} Timestamp   :`, timestamp);

  if (typeof callerDetails === "object") {
    console.log(`${emoji} Class Name  :`, callerDetails.className);
    console.log(`${emoji} Method Name :`, callerDetails.methodName);
    console.log(`${emoji} Line Number :`, callerDetails.lineNumber);
  } else {
    console.log(`${emoji} Caller      :`, callerDetails);
  }
  console.log("-------------------------------------------------------");

  try {
    const processedArgs = args.map((arg) =>
      typeof arg === "object" ? safeStringify(arg) : arg
    );

    if (type === "assert") {
      console.assert(
        args[0],
        `${emoji} Message     :`,
        ...processedArgs.slice(1)
      );
    } else if (
      type === "table" &&
      args.length === 1 &&
      typeof args[0] === "object"
    ) {
      console.table(args[0]); // Table will work for non-circular objects
    } else {
      (console as any)[type](`${emoji} Message     :`, ...processedArgs);
    }
  } catch (error) {
    console.error(`${emoji} [ShopMobify] ERROR while logging:`, error);
  }

  console.log("=======================================================\n");
};

// ✅ Safe JSON stringify to handle circular structures
function safeStringify(obj: any, space = 2): string {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return "[Circular]"; // Detect circular structures
        seen.add(value);
        console.log(key);
        
      }
      if (typeof value === "function") return "[Function]"; // Handle functions
      if (typeof value === "bigint") return value.toString(); // Handle BigInt
      return value;
    },
    space
  );
}

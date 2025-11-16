enum CommonFilterTypeEnums {
  STATUS = 'status',
  CREATED = 'created_at'
}

enum StatusFilterEnums {
  OPEN = "open", // Ticket is open and awaiting action
  REOPEN = "re_open", // Ticket is reopened
  IN_PROGRESS = "in_progress", // Ticket is being worked on
  RESOLVED = "resolved", // Ticket has been resolved
  CLOSED = "closed", // Ticket is closed
  ESCALATED = "escalated", // Ticket has been escalated to a higher support level
  WAITING_FOR_CUSTOMER = "waiting_for_customer", // Waiting for a response from the customer
  REJECTED = "rejected", // Ticket has been rejected
}

enum SuportTicketEnums {
  SUPPORT_ESCALATION = 'escalation_level',
  SUPPORT_PRIORITY = 'priority',
}

enum PriorityFilterEnums {
  CRITICAL = "s1", // Highest priority
  HIGH = "s2", // High priority
  MEDIUM = "s3", // Medium priority
  LOW = "s4", // Low priority
}

enum EscalationFilterEnums {
  SUPPORT_TEAM = "level_1", // Support Team Level
  MANAGER = "level_2", // Manager Level
  ENGINEERING = "level_3", // Engineering Level
  EXECUTIVE = "executive", // Executive Level
}

enum AlertTypeEnums {
  SEVERITY = 'severity',
  ALERT_TYPE = 'alert_type',
  SOURCE = 'souurce'
}

enum AccessManagerTypeEnums {
  ROLE = 'role',
  DEPT = 'department',
  ACCESS_LEVEL = 'access_level'
}

enum ActivityFeedTypeEnums {
  ACTIVITY_TYPE = 'activity_type',
  USER = 'user',
  MODULE = 'module'
}

export enum AlertSeverityEnum {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  INFO = 'info',
}

export enum AlertTypeSubEnum {
  SYSTEM = 'system',
  SECURITY = 'security',
  BILLING = 'billing',
  APPLICATION = 'application',
  API = 'api',
  AUTHENTICATION = 'authentication',
  INTEGRATION = 'integration',
  PERFORMANCE = 'performance',
}

export enum AlertSourceEnum {
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  DATABASE = 'database',
  PAYMENT_GATEWAY = 'payment_gateway',
  AUTH_SERVICE = 'auth_service',
  NOTIFICATION_SERVICE = 'notification_service',
  WEBHOOK = 'webhook',
  THIRD_PARTY = 'third_party',
}

export enum AccessRoleEnum {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  EDITOR = 'editor',
  VIEWER = 'viewer',
  SUPPORT = 'support',
  DEVELOPER = 'developer',
  CUSTOM = 'custom',
}

export enum AccessDepartmentEnum {
  ENGINEERING = 'engineering',
  PRODUCT = 'product',
  DESIGN = 'design',
  MARKETING = 'marketing',
  SALES = 'sales',
  SUPPORT = 'support',
  FINANCE = 'finance',
  HR = 'hr',
  OPERATIONS = 'operations',
}

export enum AccessLevelEnum {
  FULL_ACCESS = 'full_access',
  READ_WRITE = 'read_write',
  READ_ONLY = 'read_only',
  RESTRICTED = 'restricted',
  NO_ACCESS = 'no_access',
}

export enum ActivityTypeSubEnum {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LOGIN = 'login',
  LOGOUT = 'logout',
  FAILED_LOGIN = 'failed_login',
  PASSWORD_RESET = 'password_reset',
  STATUS_CHANGE = 'status_change',
  PERMISSION_CHANGE = 'permission_change',
  COMMENT_ADDED = 'comment_added',
}


export enum ActivityModuleEnum {
  SUPPORT_TICKETS = 'support_tickets',
  ALERTS = 'alerts',
  ACCESS_MANAGER = 'access_manager',
  ACTIVITY_FEED = 'activity_feed',
  PROJECTS = 'projects',
  BILLING = 'billing',
  PROFILE = 'profile',
  SETTINGS = 'settings',
}


export {
  CommonFilterTypeEnums,
  SuportTicketEnums,
  StatusFilterEnums,
  EscalationFilterEnums,
  PriorityFilterEnums,
  AlertTypeEnums,
  AccessManagerTypeEnums,
  ActivityFeedTypeEnums
}
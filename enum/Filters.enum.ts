enum FilterTypeEnums {
  STATUS = 'status',
  ESCALATION = 'escalation_level',
  PRIORITY = 'priority',
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

export {
  
  FilterTypeEnums,
  StatusFilterEnums,
  EscalationFilterEnums,
  PriorityFilterEnums
}
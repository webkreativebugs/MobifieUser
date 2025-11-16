import {
  CommonFilterTypeEnums,
  SuportTicketEnums,
  StatusFilterEnums,
  EscalationFilterEnums,
  PriorityFilterEnums,

  AlertTypeEnums,
  AlertSeverityEnum,
  AlertTypeSubEnum,
  AlertSourceEnum,

  AccessManagerTypeEnums,
  AccessRoleEnum,
  AccessDepartmentEnum,
  AccessLevelEnum,

  ActivityFeedTypeEnums,
  ActivityTypeSubEnum,
  ActivityModuleEnum,
} from '../../enum/Filters.enum'


const FilterFields = {

  "alerts": [
    CommonFilterTypeEnums.CREATED,
    CommonFilterTypeEnums.STATUS,
    AlertTypeEnums.ALERT_TYPE,
    AlertTypeEnums.SEVERITY,
    AlertTypeEnums.SOURCE,
  ],

  "access": [
    CommonFilterTypeEnums.CREATED,
    CommonFilterTypeEnums.STATUS,
    AccessManagerTypeEnums.ACCESS_LEVEL,
    AccessManagerTypeEnums.DEPT,
    AccessManagerTypeEnums.ROLE,
  ],

  "activity": [
    CommonFilterTypeEnums.CREATED,
    CommonFilterTypeEnums.STATUS,
    ActivityFeedTypeEnums.ACTIVITY_TYPE,
    ActivityFeedTypeEnums.MODULE,
    ActivityFeedTypeEnums.USER,
  ],

  "support": [
    CommonFilterTypeEnums.CREATED,
    CommonFilterTypeEnums.STATUS,
    SuportTicketEnums.SUPPORT_ESCALATION,
    SuportTicketEnums.SUPPORT_PRIORITY,
  ],

  /* ===========================
      SUPPORT TICKETS
  ============================ */

  [CommonFilterTypeEnums.STATUS]: [
    StatusFilterEnums.OPEN,
    StatusFilterEnums.IN_PROGRESS,
    StatusFilterEnums.WAITING_FOR_CUSTOMER,
    StatusFilterEnums.RESOLVED,
    StatusFilterEnums.REOPEN,
    StatusFilterEnums.REJECTED,
    StatusFilterEnums.ESCALATED,
    StatusFilterEnums.CLOSED,
  ],

  [SuportTicketEnums.SUPPORT_PRIORITY]: [
    PriorityFilterEnums.CRITICAL,
    PriorityFilterEnums.HIGH,
    PriorityFilterEnums.MEDIUM,
    PriorityFilterEnums.LOW,
  ],

  [SuportTicketEnums.SUPPORT_ESCALATION]: [
    EscalationFilterEnums.SUPPORT_TEAM,
    EscalationFilterEnums.MANAGER,
    EscalationFilterEnums.EXECUTIVE,
    EscalationFilterEnums.ENGINEERING,
  ],

  [CommonFilterTypeEnums.CREATED]: [],


  /* ===========================
      ALERTS
  ============================ */

  [AlertTypeEnums.SEVERITY]: [
    AlertSeverityEnum.CRITICAL,
    AlertSeverityEnum.HIGH,
    AlertSeverityEnum.MEDIUM,
    AlertSeverityEnum.LOW,
    AlertSeverityEnum.INFO,
  ],

  [AlertTypeEnums.ALERT_TYPE]: [
    AlertTypeSubEnum.SYSTEM,
    AlertTypeSubEnum.SECURITY,
    AlertTypeSubEnum.BILLING,
    AlertTypeSubEnum.APPLICATION,
    AlertTypeSubEnum.API,
    AlertTypeSubEnum.AUTHENTICATION,
    AlertTypeSubEnum.INTEGRATION,
    AlertTypeSubEnum.PERFORMANCE,
  ],

  [AlertTypeEnums.SOURCE]: [
    AlertSourceEnum.BACKEND,
    AlertSourceEnum.FRONTEND,
    AlertSourceEnum.DATABASE,
    AlertSourceEnum.PAYMENT_GATEWAY,
    AlertSourceEnum.AUTH_SERVICE,
    AlertSourceEnum.NOTIFICATION_SERVICE,
    AlertSourceEnum.WEBHOOK,
    AlertSourceEnum.THIRD_PARTY,
  ],


  /* ===========================
      ACCESS MANAGER
  ============================ */

  [AccessManagerTypeEnums.ROLE]: [
    AccessRoleEnum.ADMIN,
    AccessRoleEnum.MODERATOR,
    AccessRoleEnum.EDITOR,
    AccessRoleEnum.VIEWER,
    AccessRoleEnum.SUPPORT,
    AccessRoleEnum.DEVELOPER,
    AccessRoleEnum.CUSTOM,
  ],

  [AccessManagerTypeEnums.DEPT]: [
    AccessDepartmentEnum.ENGINEERING,
    AccessDepartmentEnum.PRODUCT,
    AccessDepartmentEnum.DESIGN,
    AccessDepartmentEnum.MARKETING,
    AccessDepartmentEnum.SALES,
    AccessDepartmentEnum.SUPPORT,
    AccessDepartmentEnum.FINANCE,
    AccessDepartmentEnum.HR,
    AccessDepartmentEnum.OPERATIONS,
  ],

  [AccessManagerTypeEnums.ACCESS_LEVEL]: [
    AccessLevelEnum.FULL_ACCESS,
    AccessLevelEnum.READ_WRITE,
    AccessLevelEnum.READ_ONLY,
    AccessLevelEnum.RESTRICTED,
    AccessLevelEnum.NO_ACCESS,
  ],


  /* ===========================
      ACTIVITY FEED
  ============================ */

  [ActivityFeedTypeEnums.ACTIVITY_TYPE]: [
    ActivityTypeSubEnum.CREATE,
    ActivityTypeSubEnum.UPDATE,
    ActivityTypeSubEnum.DELETE,
    ActivityTypeSubEnum.LOGIN,
    ActivityTypeSubEnum.LOGOUT,
    ActivityTypeSubEnum.FAILED_LOGIN,
    ActivityTypeSubEnum.PASSWORD_RESET,
    ActivityTypeSubEnum.STATUS_CHANGE,
    ActivityTypeSubEnum.PERMISSION_CHANGE,
    ActivityTypeSubEnum.COMMENT_ADDED,
  ],

  [ActivityFeedTypeEnums.USER]: [],

  [ActivityFeedTypeEnums.MODULE]: [
    ActivityModuleEnum.SUPPORT_TICKETS,
    ActivityModuleEnum.ALERTS,
    ActivityModuleEnum.ACCESS_MANAGER,
    ActivityModuleEnum.ACTIVITY_FEED,
    ActivityModuleEnum.PROJECTS,
    ActivityModuleEnum.BILLING,
    ActivityModuleEnum.PROFILE,
    ActivityModuleEnum.SETTINGS,
  ],
};

export { FilterFields };


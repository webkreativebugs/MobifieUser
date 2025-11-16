import {FilterTypeEnums , StatusFilterEnums , EscalationFilterEnums , PriorityFilterEnums} from '../../enum/Filters.enum'

const FilterFields = {

  [FilterTypeEnums.STATUS] :[
    [StatusFilterEnums.CLOSED],
    [StatusFilterEnums.ESCALATED],
    [StatusFilterEnums.IN_PROGRESS],
    [StatusFilterEnums.OPEN],
    [StatusFilterEnums.REJECTED],
    [StatusFilterEnums.REOPEN],
    [StatusFilterEnums.RESOLVED],
    [StatusFilterEnums.WAITING_FOR_CUSTOMER]

  ],
  [FilterTypeEnums.PRIORITY] :[
      [PriorityFilterEnums.CRITICAL],
      [PriorityFilterEnums.HIGH],
      [PriorityFilterEnums.LOW],
      [PriorityFilterEnums.MEDIUM]
    ]

  ,
  [FilterTypeEnums.ESCALATION] :[
    [EscalationFilterEnums.ENGINEERING],
    [EscalationFilterEnums.EXECUTIVE],
    [EscalationFilterEnums.MANAGER],
    [EscalationFilterEnums.SUPPORT_TEAM]
  ],
  [FilterTypeEnums.CREATED] :[]

}

export {FilterFields}
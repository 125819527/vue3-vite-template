
const formatDate = (date, format = 'YYYY年MM月DD日') => {
    var year = date.getFullYear()
    var month = ('0' + (date.getMonth() + 1)).slice(-2) // 月份从0开始，所以要加1，并且前面补0
    var day = ('0' + date.getDate()).slice(-2)
  
    return format.replace(/YYYY|MM|M|DD|D/g, function (match) {
      switch (match) {
        case 'YYYY':
          return year
        case 'MM':
          return month
        case 'M':
          return month.toString().charAt(0) // 如果只需要月份数字的个位数
        case 'DD':
          return day
        case 'D':
          return day.toString().charAt(0) // 如果只需要日期数字的个位数
  
        default:
          return match
      }
    })
  }

  export {formatDate}
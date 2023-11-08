import Moment from "moment"

export function moment(date: string) {
  return Moment(date).locale('pt-br')
}
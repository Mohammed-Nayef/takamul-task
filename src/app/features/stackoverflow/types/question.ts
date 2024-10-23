import { QuestionOwner } from "./question-owner"

export interface Question{
  tags:string[]
  "owner":QuestionOwner
  "is_answered": boolean
  "view_count": number
  "answer_count": number
  "score": number
  "last_activity_date": number 
  "creation_date": number 
  "question_id": number
  "content_license": string
  "link": string
  "title":string
}
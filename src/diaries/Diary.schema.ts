import mongoose from "mongoose"
import { ObjectId } from "mongodb";
import { DiaryModel } from "./diary.interface";


const diaryeSchema = new mongoose.Schema<DiaryModel>({
  id: ObjectId,
  date: String,
  weather: ['sunny', 'cloudy', 'rainy', 'wendy', 'stormy'],
  mood: ['great', 'good', 'sick', 'bad'],
  comment: String
})

diaryeSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id;
    delete returnedObject._v
  }
})

const Diary = mongoose.model('Diary', diaryeSchema)

export default Diary;

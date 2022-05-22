import express from 'express';
import * as DiaryService from "./diaries.service";
import { ObjectId } from "mongodb";
import toNewDiaryEntry from '../utils/validation';

const router = express.Router();

// GET diaries
router.get('/', async (_req, res) => {
  try {
    const diaries = await DiaryService.findAll().then(data => {
      res.json(data)
    })
    res.status(200).send(diaries);
  } catch (e: any) {
    res.status(500).send(e.message);
  }

})

// GET diary
router.get('/:id', async (req, res) => {
  const id = req?.params?.id
  try {
    const query = { _id: new ObjectId(id) };
    const result = await DiaryService.findById(query);
    res.status(200).send(result);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
})

// POST diary/:id
router.post('/', async (req, res) => {
  try {
    const newDiary = toNewDiaryEntry(req.body)
    const result = await DiaryService.create(newDiary);
    res.status(201).json(result);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// PUT diary/:id
router.put("/:id", async (req, res) => {
  const id = req?.params?.id;

  try {
    const updatedDiary = toNewDiaryEntry(req.body)
    const query = { _id: new ObjectId(id) };
    const newDiary = await DiaryService.update(query, updatedDiary);
    res.status(201).json(newDiary);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE diary/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = req?.params?.id
    const query = { _id: new ObjectId(id) };
    await DiaryService.remove(query);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


export default router

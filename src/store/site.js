import { createSlice } from "@reduxjs/toolkit";

const site = createSlice({
  name: 'site',
  initialState: {
    documents: [
      { id: 1, title: "Документ 1", text: "С собрания", status: "in-progress" },
      { id: 2, title: "Документ 2", text: "Записи с конфы", status: "in-progress" },
      { id: 3, title: "Документ 3", text: "Что у конкурентов", status: "under-review" },
      { id: 4, title: "Документ 4", text: "Техническое задание по сайту", status: "in-progress" },
      { id: 5, title: "Документ 5", text: "Список награждаемых", status: "done" },
      { id: 6, title: "Документ 6", text: "Заявки на участие в ивенте", status: "under-review" },
      { id: 7, title: "Документ 7", text: "Список для рассылки", status: "done" },
      { id: 8, title: "Документ 8", text: "Презентация товара", status: "done" },
    ],
    currentCard: null,
  },
  reducers: {
    setCard(state, action) {
      state.currentCard = action.payload;
    },
  },
});

export const { setCard } = site.actions;
export default site.reducer;
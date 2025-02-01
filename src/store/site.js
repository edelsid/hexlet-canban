import { createSlice } from "@reduxjs/toolkit";

const site = createSlice({
  name: 'site',
  initialState: {
    documents: [
      { 
        id: 1, 
        title: "С собрания", 
        text: "Темы, обсуждавшиеся на последнем собрании. Просьба дополнить и дать всем ознакомиться до следующей недели.", 
        status: "in-progress",
        img: {
          link: "/doc.jpg",
          alt: "календарь, тетради и линейка на столе",
        },
      },
      { 
        id: 2, 
        title: "MegaFest 2023", 
        text: "Записи с конфы, отдельно по каждой секции. Прикрепить ссылки на презентации. Если есть фото/видео, их тоже. Обязательно указывать авторство!!", 
        status: "in-progress" 
      },
      { 
        id: 3, 
        title: "Что у конкурентов", 
        text: "Реклама и обзоры их последних продуктов", 
        status: "under-review" 
      },
      { 
        id: 4, 
        title: "Техзадание", 
        text: "Техническое задание по лендингу для сайта онлайн-кинотеатра. Требуются правки.", 
        status: "in-progress",
        img: {
          link: "/site.jpg",
          alt: "открытая IDE с кодом",
        }
      },
      { 
        id: 5, 
        title: "Список награждаемых", 
        text: "На первый квартал 2024 года", 
        status: "done",
        img: {
          link: "/award.jpg",
          alt: "кубок",
        }
      },
      { 
        id: 6, 
        title: "Кто идет", 
        text: "Заявки на участие в ивенте.", 
        status: "under-review",
        img: {
          link: "/event.jpg",
          alt: "воздушные шарики"
        }
      },
      { 
        id: 7, 
        title: "Уведомления", 
        text: "Список для рассылки. Разбито по компаниям", 
        status: "done" 
      },
      { 
        id: 8, 
        title: "Слайды", 
        text: "Презентация товара.", 
        status: "done" 
      },
    ],
    currentCard: null,
  },
  reducers: {
    setCard(state, action) {
      state.currentCard = action.payload;
    },
    changeDocs(state, action) {
      state.documents = action.payload;
    },
    addDocument(state, action) {
      const newId = state.documents.length + 1;
      state.documents.push({
        id: newId,
        ...action.payload,
      });
    }
  },
});

export const { setCard, changeDocs, addDocument } = site.actions;
export default site.reducer;
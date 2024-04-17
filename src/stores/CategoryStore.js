import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

export const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')

  const dialog = ref(false)
  const dialogDetail = ref(false)
  const dialogDelete = ref(false)
  const form = ref(false)
  const category = reactive({
    id: '',
    name: '',
    description: '',
    isUpdate: false
  })

  const categories = ref(null)

  const onSubmitData = async () => {
    if (!form.value) return

    if (category.isUpdate) {
      await updateDoc(doc(CategoryCollection, category.id), {
        name: category.name,
        description: category.description
      })
    } else {
      await addDoc(CategoryCollection, {
        name: category.name,
        description: category.description
      })
    }

    alert('Berhasil')
    dialog.value = false

    readCategory()
  }

  const getData = (item) => {
    dialogDetail.value = true
    category.id = item.id
    category.name = item.name
    category.description = item.description
  }

  const readCategory = async () => {
    const res = await getDocs(CategoryCollection)
    categories.value = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }

  const clearInput = () => {
    category.id = ''
    category.name = ''
    category.description = ''
    category.isUpdate = false
  }

  const tambahData = () => {
    dialog.value = true
    clearInput()
  }

  const editData = (item) => {
    dialog.value = true
    category.isUpdate = true
    getIdData(item)
  }

  const getIdData = (item) => {
    category.id = item.id
    category.name = item.name
    category.description = item.description
  }

  const deleteData = (item) => {
    dialogDelete.value = true
    getIdData(item)
  }

  const destroyData = async (itemId) => {
    await deleteDoc(doc(CategoryCollection, itemId))
    alert('Hapus Berhasil')
    dialogDelete.value = false
    clearInput()
    readCategory()
  }

  return {
    dialog,
    form,
    category,
    onSubmitData,
    readCategory,
    categories,
    dialogDetail,
    getData,
    tambahData,
    editData,
    dialogDelete,
    deleteData,
    destroyData
  }
})

import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/config/firebase'
import { useAuthStores } from './AuthStores'
import { useRouter } from 'vue-router'
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export const useNewsStore = defineStore('News', () => {
  // state
  const news = reactive({
    id: '',
    title: '',
    content: '',
    category: '',
    isUpdate: false
  })

  const formInput = ref(false)

  // getData
  const newsData = ref(null)

  // detail
  const detailNews = ref(null)

  // Router
  const router = useRouter()

  // storage
  const AuthStores = useAuthStores()

  // collection
  const newsCollection = collection(db, 'news')

  const handleSubmit = async () => {
    if (news.isUpdate) {
      // edit data
      await updateDoc(doc(newsCollection, news.id), {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        }
      })
    } else {
      // tambah data
      const now = Date.now()
      await addDoc(newsCollection, {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        },
        isApprove: false,
        image: null,
        writtenBy: {
          id: AuthStores.currentUser.id,
          name: AuthStores.currentUser.name,
          email: AuthStores.currentUser.email
        },
        createdAt: now
      })
      alert('Tambah Berita Berhasil')
    }
    router.push({ name: 'News' })
  }

  // getDocs
  const allNews = async () => {
    const dataBerita = await getDocs(newsCollection)
    newsData.value = dataBerita.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }

  const detailHandling = async (idParams) => {
    const docRef = doc(newsCollection, idParams)
    const docDetail = await getDoc(docRef)

    detailNews.value = docDetail.data()
  }

  const clearHandling = () => {
    news.id = ''
    news.title = ''
    news.content = ''
    news.category = ''
    news.isUpdate = false
  }

  const updateHandling = async (idParams) => {
    const docRef = doc(newsCollection, idParams)
    const docDetail = await getDoc(docRef)
    ;(news.id = docRef.id),
      (news.title = docDetail.data().title),
      (news.content = docDetail.data().content),
      (news.category = docDetail.data().category),
      (news.isUpdate = true)
  }

  const deleteHandling = async (idParams) => {
    await deleteDoc(doc(newsCollection, idParams))
    alert('Data Berhasil di Hapus')
    allNews()
  }

  return {
    news,
    formInput,
    handleSubmit,
    newsData,
    allNews,
    detailNews,
    detailHandling,
    clearHandling,
    updateHandling,
    deleteHandling
  }
})

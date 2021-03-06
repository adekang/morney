// 全局声明类型
type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date  // 类 / 构造函数

}
// 声明数据类型
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {

}

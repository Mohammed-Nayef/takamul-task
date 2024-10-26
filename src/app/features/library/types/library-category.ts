export interface LibraryCategory {
  "id": number,
  "name":string,
  "description":string,
  "subcategories":LibrarySubcategory[]
}
interface LibrarySubcategory {
  "id":number,
  "name":string,
}
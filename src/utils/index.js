const getInitialData = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 2,
    title: "Css",
    body: "aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.",
    createdAt: "2022-08-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "JavaScript",
    body: " bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera.",
    createdAt: "2022-09-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "React",
    body: "pustaka JavaScript front-end sumber terbuka dan gratis untuk membangun antarmuka pengguna berdasarkan komponen UI. Itu dikelola oleh Meta dan komunitas pengembang individu dan perusahaan.",
    createdAt: "2022-06-14T04:27:34.572Z",
    archived: false,
  },
 
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };

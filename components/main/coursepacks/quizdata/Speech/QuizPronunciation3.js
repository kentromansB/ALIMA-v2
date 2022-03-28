const data = [
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F25%20gusto%20-%20kallini.mp3?alt=media&token=92b8617a-3dcf-4084-b1a7-51c1ceef22fb",
    options: ["Ilagay", "Gusto", "Basahin", "Laro"],
    correct_option: "Gusto",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F32%20magbigay%20-%20mag%20atag.mp3?alt=media&token=365c8f51-f63f-4d17-bee0-7d54ee45bd6f",
    options: ["Kumuha", "Kailangan", "Magbigay", "Sabihin"],
    correct_option: "Magbigay",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F35%20paglipat%20-%20pagbarin.mp3?alt=media&token=322b14d0-048a-4173-a45e-f0205c074e06",
    options: ["Pag gamit", "Pag lipat", "Pag bigay", "Pag kuha"],
    correct_option: "Pag lipat",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F33%20sabihan%20%20sabihin%20-%20paglawnga.mp3?alt=media&token=ed79bf77-f822-470f-99a9-5791139dee9f",
    options: ["Tulungan", "Sabihin", "Gamitin", "Kunin"],
    correct_option: "Sabihin",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F34%20tulugan%20-%20tabangan.mp3?alt=media&token=96c54b6a-eefd-42a6-aa79-8e053d01d3b8",
    options: ["Tulungan", "Sabihin", "Gamitin", "Kunin"],
    correct_option: "Tulungan",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F37%20sulat%20-%20surat.mp3?alt=media&token=4f14ba13-aba9-45a4-a5fb-55e349fb6eb8",
    options: ["Sumulat", "Sinabi", "Basahin", "Gamitin"],
    correct_option: "Sumulat",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F14%20salita%20-%20nilawngan.mp3?alt=media&token=bae96ba6-f514-4067-8aab-e10d32a20dfc",
    options: ["sulat", "tulong", "mataas", "salita"],
    correct_option: "salita",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F21%20gawin%20-%20inangon%20(gagawin).mp3?alt=media&token=f8bee27d-aaeb-40ba-941b-cca6db13f2ed",
    options: ["gawin", "gumana", "gamitin", "sulat"],
    correct_option: "gawin",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F24%20gumagana%20-%20yagadug.mp3?alt=media&token=b004f53e-e28f-422e-84ae-56ef823d67fa",
    options: ["gumamit", "binasa", "lipat", "gumagana"],
    correct_option: "gumagana",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F26%20laro%20-%20paballong.mp3?alt=media&token=48139bf0-e16d-4944-86c9-7d8425689f71",
    options: ["laro", "kain", "kumuha", "binasa"],
    correct_option: "laro",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F61%20Ilagay%20-%20bu-ta-ngan.mp3?alt=media&token=c52af52c-631b-42a3-ab0e-853695340905",
    options: ["laro", "ilagay", "gumagana", "nagbago"],
    correct_option: "ilagay",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F30%20kailangan%20-%20patot.mp3?alt=media&token=4715d6db-b9d1-4e1f-bbf3-9f75bd453eb0",
    options: ["bigay", "maliit", "kinahanglan", "kailangan"],
    correct_option: "kailangan",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F31%20kuha%20-%20kamang.mp3?alt=media&token=b025e510-8580-4308-aad4-5cd43773dd6c",
    options: ["kahapon ", "kailangan ", "kapatid", "kumuha"],
    correct_option: "kumuha",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F38%20pag%20gawa%20-%20pag%20imo.mp3?alt=media&token=66c0cd16-cb5d-4aa2-be82-c3216fcd021f",
    options: ["Gumawa", "Pagsulat ", "Para sayo", "Pag tingin"],
    correct_option: "Gumawa",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F23%20sinabi%20-%20ilawng.mp3?alt=media&token=d1ab2908-af5d-41c4-a46a-9cacb69eda31",
    options: ["Sinabi", "Binuksan", "Oras", "Gumagana"],
    correct_option: "Sinabi",
  },
  {
    question:
      "https://firebasestorage.googleapis.com/v0/b/kaag-1aa02.appspot.com/o/audio%2FstaticDictionary%2F14%20salita%20-%20basa.mp3?alt=media&token=92a7f62f-82bb-48bf-a756-a22f840f7160",
    options: ["Basain", "Basahin", "Ilagay", "Ibago"],
    correct_option: "Basahin",
  },
];

export default data;

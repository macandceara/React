import capapinkfloyd from "./pinkfloyd.png";
import capapinduca from "./pinduca.jpg";
import capabeatles from "./beatles.png";
import capairon from "./ironmaiden.png";
import capaled from "./ledzepellin.png";
import capakiss from "./kiss.png";
import capafrank from "./franksinatra.png";
import capaqueen from "./queen.png";
import pink1 from "./pink1.mp3";
import p1 from "./pinduca/1.mp3";
import b1 from "./beatles1.mp3";
import fly from "./fly.mp3.mp3";
import iron from "./iron.mp3";
import kiss from "./kiss.mp3";

const playlists = [
  { id: 1, nome: "Pink Floyd", capa: [capapinkfloyd], musicas: [pink1] },
  { id: 2, nome: "Pinduca", capa: [capapinduca], musicas: [p1] },
  { id: 3, nome: "Beatles", capa: [capabeatles], musicas: [b1] },
  { id: 4, nome: "Iron Maiden", capa: [capairon], musicas: [iron] },
  { id: 5, nome: "Led Zepellin", capa: [capaled], musicas: [p1] },
  { id: 6, nome: "Kiss", capa: [capakiss], musicas: [kiss] },
  { id: 7, nome: "Frank Sinatra", capa: [capafrank], musicas: [fly] },
  { id: 8, nome: "Queen", capa: [capaqueen], musicas: [p1] },
];

export default playlists;


import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Zhongli",
      bio: "Hasta ahora unos de arcontes mas fuertes capaz de hacerle frente a Shongun Raiden Arconte Electro",
      img: "https://img.wattpad.com/f5e9b3bc91ca9ab911a99614b5a74d29342cf202/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a586c5a77534534563576707a773d3d2d3830393939323432392e313636636439356536356330616538313935353631313638373537322e6a7067",
      aparicion: "2020-11-11",
      casa:"Genshin Impact"
    },
    {
      nombre: "Raiden Shogun Baal",
      bio: "Arconte Electro la cual se encarga de robar visiones en Inazuman, considerada una de las arcontes mas fuerte y la cual logro la inmortalidad",
      img: "https://9to5fortnite.com/wp-content/uploads/2021/09/genshin-impact-raiden-shogun.jpg",
      aparicion: "2021-08-01",
      casa:"Genshin Impact"
    },
    {
      nombre: "Xiao",
      bio: "Uno de los supervivientes y adepte de Liyue la cual ahora defiende a sus habitantes",
      img: "https://images3.alphacoders.com/112/thumb-1920-1126757.jpg",
      aparicion: "2020-08-12",
      casa: "Genshin Impact"
    },
    {
      nombre: "Tartaglia",
      bio: "Un miembro de los 11 de los fatui y uno de sus miembros mas nuevos y mas fuertes",
      img: "https://i.ytimg.com/vi/-UJoyO5JZaY/maxresdefault.jpg",
      aparicion: "2020-05-01",
      casa:"Genshin Impact"
    },
    {
      nombre: "Revenant",
      bio: "Consumido por el odio y obsesionado con la venganza, Revenant usa habilidades sobrenaturales para acechar a sus enemigos y desafiar a la muerte",
      img: "https://wallpaperaccess.com/full/3349632.jpg",
      aparicion: "2020-01-30",
      casa: "Apex Legends"
    },
    {
      nombre: "Mirage",
      bio: "Mirage es la típica persona a la que le gusta no pasar desapercibida.El menor de 4 hermanos, ha llevado a la perfección el arte de bromear para llamar la atención. Lo que sí se tomó muy en serio fue la tecnología de holopiloto. Su madre, ingeniera, le enseñó los entresijos de esta tecnología creadora de ilusiones, y Mirage se entregó al estudio de sus mecanismos hasta aprender todo lo que pudo sobre estos. Incluso después de que sus hermanos desaparecieran en combate durante la Guerra de la Frontera, Mirage y su madre siguieron desarrollando dispositivos holográficos, y el trabajo los unió.",
      img: "https://estnn.com/wp-content/uploads/2020/05/Mirage-wallpaper.jpg",
      aparicion: "2019-01-04",
      casa: "Apex Legends"
    },
    {
      nombre: "Bangalore",
      bio: "Nacida en una familia militar donde ella, sus padres y sus cuatro hermanos mayores sirvieron con la IMC, Bangalore fue una soldado excepcional toda su vida. Dedicada a la causa de la IMC, fue la mejor de su clase en la Academia Militar de la IMC y la única cadete que pudo desmontar un Peacekeeper, equiparlo con un estrangulador de precisión y armarlo de nuevo en menos de veinte segundos... con los ojos vendados.",
      img: "https://images2.alphacoders.com/115/1151274.jpg",
      aparicion: "2019-01-04",
      casa: "Apex Legends"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: any ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};

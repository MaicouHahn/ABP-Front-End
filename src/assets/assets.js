import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import footer_logo from "./footer_logo.png";
import search_icon from "./search_icon.png";
import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import add_icon from "./add_icon.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import order_icon from "./order_icon.png";
import profile_image from "./profile_image.png";
import upload_area from "./upload_area.png";
import bolos_img from "./bolos_img.jpg";
import sanduiches_img from "./sanduiches_img.jpg";
import sanduiche_castanha from "./sanduiche_castanha.jpg";
import paes_img from "./paes_img.jpg";
import bebidas_img from "./bebidas_img.jpg";
import comemorativos_img from "./comemorativos_img.jpg";
import combos_img from "./combos_img.jpg";
import semgluten_img from "./semgluten_img.jpg";
import semlactose_img from "./semlactose_img.png";
import vegan_img from "./vegan_img.png";
import bolo_nozes from "./bolo_nozes.jpg";
import bolo_cheesecakemorango from "./bolo_cheesecakemorango.jpg";
import paobatata from "./paobatata.jpg";
import paoabobora from "./paoabobora.jpg";

export const assets = {
  logo,
  upload_area,
  profile_image,
  basket_icon,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  add_icon,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  order_icon,
  footer_logo,
};

// basket_icon,
// logo,
// search_icon,
// add_icon_white,
// add_icon_green,
// add_icon,
// remove_icon_red,
// app_store,
// play_store,
// linkedin_icon,
// facebook_icon,
// twitter_icon,
// cross_icon,
// selector_icon,
// rating_starts,
// profile_icon,
// bag_icon,
// logout_icon,
// parcel_icon,
// order_icon,
// profile_image,
// upload_area,
// bolos_img,
// sanduiches_img,
// paes_img,
// bebidas_img,
// comemorativos_img,
// combos_img,
// semgluten_img,
// semlactose_img,
// vegan_img,
// bolo_nozes,
// bolo_cheesecakemorango

export const url = "http://localhost:5173";

export const menu_list = [
  {
    menu_name: "Bolos",
    menu_image: bolos_img,
  },
  {
    menu_name: "Sanduiches",
    menu_image: sanduiches_img,
  },
  {
    menu_name: "Pães",
    menu_image: paes_img,
  },
  {
    menu_name: "Bebidas",
    menu_image: bebidas_img,
  },
  {
    menu_name: "Comemorativos",
    menu_image: comemorativos_img,
  },
  {
    menu_name: "Combos",
    menu_image: combos_img,
  },
  {
    menu_name: "Sem glúten",
    menu_image: semgluten_img,
  },
  {
    menu_name: "Sem lactose",
    menu_image: semlactose_img,
  },
  {
    menu_name: "Vegano",
    menu_image: vegan_img,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Bolo de Nozes e Chocolate",
    image: bolo_nozes,
    description: "Bolo leve de nozes com cobertura de ganache de chocolate.",
    price: 50,
    category: "Bolos",
  },
  {
    _id: "2",
    name: "Cheesecake de Frutas Vermelhas",
    image: bolo_cheesecakemorango,
    description:
      "Cremoso com base crocante e cobertura de frutas vermelhas frescas.",
    price: 79,
    category: "Bolos",
  },
  {
    _id: "3",
    name: "Sanduíche com Queijo de Castanhas",
    image: sanduiche_castanha,
    description:
      "Com alface, tomate, pão artesanal e queijo à base de castanhas.",
    price: 12,
    category: "Sanduiches",
  },
  {
    _id: "4",
    name: "Pão de Batata",
    image: paobatata,
    description:
      "O pão de batata artesanal é macio, fofinho e feito com ingredientes selecionados, oferecendo um sabor caseiro e delicado.",
    price: 8,
    category: "Pães",
  },
  {
    _id: "5",
    name: "Pão de Abóbora",
    image: paoabobora,
    description:
      "O pão de abóbora artesanal é suave, levemente adocicado e preparado com ingredientes naturais, oferecendo um sabor único e nutritivo.",
    price: 10,
    category: "Pães",
  },
];

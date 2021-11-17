import { createStore } from 'vuex'
import auth from "./auth"
import lang from "./lang"
import bannersBanner from "./modules/banners/bannersBanner"
import bannersTop from "./modules/banners/bannersTop"
import bannersSales from "./modules/banners/bannersSales"
import bannersItem from "./modules/banners/bannersItem"
import filmsNow from "./modules/films/filmsNow"
import filmsSoon from "./modules/films/filmsSoon"
import filmsEditor from "./modules/films/filmsEditor"
import filmsEditorGallery from "./modules/films/filmsEditorGallery"
import cinemas from "./modules/cinemas/cinemas"
import cinemasHalls from "./modules/cinemas/cinemasHalls"
import cinemasEdit from "./modules/cinemas/cinemasEdit"
import cinemasItem from "./modules/cinemas/cinemasItem"
import cinemasEditGallery from "./modules/cinemas/cinemasEditGallery"
import cinemasEditHalls from "./modules/cinemas/cinemasEditHalls"
import news from "./modules/news/news"
import newsEdit from "./modules/news/newsEdit"
import newsEditGallery from "./modules/news/newsEditGallery"
import sales from "./modules/sales/sales"
import salesEdit from "./modules/sales/salesEdit"
import salesEditGallery from "./modules/sales/salesEditGallery"
import pages from "./modules/pages/pages"
import pagesEdit from "./modules/pages/pagesEdit"
import pagesEditGallery from "./modules/pages/pagesEditGallery"
import pagesContactsLogo from "./modules/pages/pagesContactsLogo"
import users from "./modules/users/users"
import mailing from "./modules/mailing/mailing"
import mailingStorage from "./modules/mailing/mailingStorage"

export default createStore({
  modules: {
    auth,
    lang,
    bannersTop,
    bannersSales,
    bannersBanner,
    bannersItem,
    filmsNow,
    filmsSoon,
    filmsEditor,
    filmsEditorGallery,
    cinemas,
    cinemasHalls,
    cinemasEdit,
    cinemasItem,
    cinemasEditGallery,
    cinemasEditHalls,
    news,
    newsEdit,
    newsEditGallery,
    sales,
    salesEdit,
    salesEditGallery,
    pages,
    pagesEdit,
    pagesEditGallery,
    pagesContactsLogo,
    users,
    mailing,
    mailingStorage
  }
})

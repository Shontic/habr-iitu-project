import React from 'react'
import AppHeader from './AppHeader'
import Category from './Category'
import PageLinks from './PageLinks'
import PostItem from './PostItem'
import  AdSideBlock from './AdSideBlock'
import SideHubs from './SideHubs'
import CompanySide from './CompanySide'
function Main(){
  return(
    <div>
      <AppHeader/>
      <PageLinks/>
      <div className="PageDivider">
        <div>
          <Category/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
        </div>
        <div>
          <AdSideBlock/>
          <SideHubs/>
          <CompanySide/>
          <AdSideBlock/>
        </div>
      </div>
    </div>
  )
}
export default Main
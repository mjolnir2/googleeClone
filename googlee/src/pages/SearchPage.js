import React from 'react'
import './SearchPage.css'
import {useStateValue} from '../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import {Link} from "react-router-dom";
import Search from './Search'


function SearchPage() {
    const [{term},dispatch] =useStateValue();
    const {data} = useGoogleSearch(term);
    //const data =Response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className ='searchPage__header'>
                <Link to ="/">
                    <img 
                    className="searchPage_logo"
                    src="/images/images.png"alt =""/>
                </Link>
                <div className="searchPage__header">
                    <Search hideButtons/>
                    <div className="searchPage_options">
                        <div className ="searchPage_optionsLeft">
                            <div className ="searchPage_option">
                                
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               {term && (
              <div className ="serachPage_results">
                  <p
                      className ="searchPage_resultCount">
                          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}seconds) for {term}
                  </p>
                  {data?.items.map (item =>(
                      <div className ="serachPage_result">
                          <a
                          className ="searchPage_resultLink" 
                          href={item.link}>
                              {item.pagemap?.cse_image?.length >0 && 
                              item.pagemap?.cse_image [0]?. src &&(
                                  <img className="searchPage_resultImage"
                                  src ={item.pagemap?.cse_image[0]?.src

                                  }
                                  alt =""
                                  />

                              )}
                               {item.displayLink}
                               </a>
                               <a
                               className ="searchPage_resultTitle" href={item.link}>
                                   <h2>{item.title}</h2>
                               </a>
                               <p
                               className="searchPage_resultSnippet">{item.snippet}

                               </p>
                          
                          
                      </div>

                  ))}

                </div>
                )}
            
            
        </div>
    )
}

export default SearchPage

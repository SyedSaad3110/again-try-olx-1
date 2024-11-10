import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ListCards from './ListCards';
import { useFirebase } from './Firebase/FirebaseContext';

function HomePage({imageURLs,favorites, toggleFavorite}) {
    const [listings, setListings] = useState([]);
    const [url, setUrl] = useState(null);
    const { listAllData, getImgUrl } = useFirebase();
    

    useEffect(() => {
        const fetchListings = async () => {
            const data = await listAllData();
            setListings(data);
            if (imageURLs) {
                try {
                    const fetchedUrl = await getImgUrl(imageURLs);
                    setUrl(fetchedUrl);
                } catch (error) {
                    console.error("Error fetching image URL:", error);
                }
            }
        };

        fetchListings();
    }, [listAllData, getImgUrl,imageURLs]);

  return (
    <HomePageSection>
    <section>
    <div className="home_page">
           { listings.length > 0 ?
            listings.map((listing) => (
                <ListCards key={listing.id} items={listing} favorites={favorites} toggleFavorite={toggleFavorite}/>
            )):
            <div className="no-items">
                <h2>No items in this Product</h2>
            </div>
            }
        </div>
    </section>
    </HomePageSection>
  )
}

export default HomePage
const HomePageSection = styled.div`
    .home_page{
        padding-top: 180px;
    }
    .no-items{
        text-align: center;
    }
`
import React, {useState, useEffect} from 'react';
// import { useFirebase } from './Firebase/FirebaseContext';
import styled from 'styled-components';
import ListCards from './ListCards';
import { useFirebase } from './Firebase/FirebaseContext';

function HomePage(props) {
    const [listings, setListings] = useState([]);
    const [url, setUrl] = useState(null);
    const { listAllData } = useFirebase();

    useEffect(() => {
        const fetchListings = async () => {
            const data = await listAllData();
            console.log("Fetched data:", data);
            setListings(data);
            firebase.getImgUrl(props.imageURLs)
            .then((url)=> setUrl(url))
        };

        fetchListings();
    }, [listAllData]);

  return (
    <HomePageSection>
    <section>
    <div className="home_page">
           { listings.length > 0 ?
            listings.map((listing) => (
                // <ListCards key={listing.id} items={listing} />
                <ListCards key={listing.id} items={listing} />
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
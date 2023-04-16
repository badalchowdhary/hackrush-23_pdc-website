import React, { useEffect, useState } from 'react';
import { ClubsData } from '../data/ClubsData'
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import EmptyList from '../components/EmptyList';

const ClubsDetails = () => {
    const { ClubName } = useParams();
    const [Club, setClub] = useState(null);
    useEffect(() => {
        let Club = ClubsData.find((Club) => Club.ClubName === (ClubName));
        if (Club) {
            setClub(Club);
        }
    }, [ClubName]);
  return (
    <div className='main-container'>
    {Club ? (
        <div>
            <Helmet>
                <title>Clubs | {Club.ClubName}</title>
            </Helmet>

            <header id="page-header">
                <div className="page-heading">
                    <h2>Clubs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="blog-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-heading">
                                <h1>{Club.ClubName}</h1>
                            </div>

                            <div className="para-contaent">
                                <p>{Club.description}</p>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <img src={Club.image} alt="event" />
                        </div>
                    </div>

                </div>








            </div>
        </div>
    ) : (
        <EmptyList />
    )}
</div>
  )
}

export default ClubsDetails
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Listing.css'
import { useSelector } from 'react-redux';

function Listing(props) {

    const [property, setstateProperty] = useState([]);

    const data = useSelector(state => state.searchData);

    useEffect(() => {
        axios.get('http://localhost:3000/listProperty').then((res)=>{
            setstateProperty(res.data.data);
        });
    }, []);

    function showDetails(id){
        props.history.push("/Details/"+id);
    }

    var propertyList = property.map((p)=>{
        if(p.PropertyDetails.city == data.city){
            return (
                <li key={p._Id}>
                    <div class='listing-wrapper1'>
                        <div class='listing-img-div1'>
                            <img src={"Details/backend/userUploads/"+p.PropertyImages[0]}></img>
                        </div>
                        <div class='listing-details-div1'>
                            <div class='listing-location-div1'>
                                <img src='images/location.png'></img>
                                <span>{p.PropertyDetails.location} , {p.PropertyDetails.landmark} , {p.PropertyDetails.city} , {p.PropertyDetails.state} -- {p.PropertyDetails.zipcode}</span>
                            </div>
                            <h2>{p.propertyTitle}</h2>
                            <div class='listing-area-div1'>
                                <img src='images/home.png'></img>
                                <span><strong>{p.PropertyDetails.area}</strong> Sq. Ft.</span>
                            </div>
                            <div class='listing-features-div1'>
                               <div>
                                    <img src='images/i-bed.png'></img>
                                    <span><strong>{p.PropertyDetails.bedrooms}</strong></span>
                               </div>
                               <div>
                                    <img src='images/i-bath.png'></img>
                                    <span><strong>{p.PropertyDetails.bathrooms}</strong></span>
                               </div>
                               <div>
                                    <img src='images/i-car.png'></img>
                                    <span><strong>{p.PropertyDetails.garage}</strong></span>
                               </div>
                               <div>
                                    <img src='images/i-pool.png'></img>
                                    <span><strong>{p.PropertyDetails.pool}</strong></span>
                               </div>
                            </div>
                            <button onClick={()=>{showDetails(p._id)}}>VIEW DETAIL</button>
                        </div>
                        <div class='listing-category1'>FOR {p.PropertyDetails.propertyCatagory}</div>
                        <div class='listing-type1'>{p.PropertyDetails.propertyType}</div>
                        <div class='listing-price1'>{p.PropertyDetails.price}</div>
                    </div>
                </li>
            )
        }
    });

    return (
        <div class='listing-container'>
            <div class='filter-div'>
                <select id='sort-price' name='sort-price'>
                    <option value=''>Sort By Price</option>
                    <option value='low-high'>Low to High</option>
                    <option value='high-low'>High to Low</option>
                </select>
                <select id='sort-area' name='sort-area'>
                    <option value=''>Sort By Area</option>
                    <option value='low-high'>Low to High</option>
                    <option value='high-low'>High to Low</option>
                </select>
                <select id='bhk' name='bhk'>
                    <option value=''>BHK</option>
                    <option value='1bhk'>1 BHK</option>
                    <option value='2bhk'>2 BHK</option>
                    <option value='3bhk'>3 BHK</option>
                    <option value='4bhk'>4 BHK</option>
                    <option value='5bhk'>5 BHK</option>
                    <option value='6bhk'>6 BHK</option>
                    <option value='7bhk'>7 BHK</option>
                </select>
            </div>
            <ul>
                {propertyList}
            </ul>
        </div>
    )
}

export default Listing


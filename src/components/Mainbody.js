import React, { useState, useEffect } from 'react'
import Card from "./Card";
import axios from "axios";

const Mainbody = () => {
    const [formDetails, setFormDetails] = useState([]);

    useEffect(() => {
        const filenames = async () => {
            let request = await axios.get("http://localhost:9000/get_all_files")
            let files = request.data;
            let tempFormDetails = [];
            for (let file of files) {
                let id = file.split(".");
                let req = await axios.get(`http://localhost:9000/data/${id[0]}`);
                tempFormDetails.push({ id: id[0], name: req.data.document_name, date: req.data.date })
            }
            setFormDetails(tempFormDetails);
        }
        filenames()
    }, [])


    return (
        <div className="mainbody">
            <div className="main_top">
                <div className="main_top_left">Recent forms</div>
            </div>
            <div className="main_docs">
                {
                    formDetails.length > 0 ? formDetails.map((form) => (
                        <Card key={form.id} formData={form} />
                    )) : ''
                }
                <Card />
            </div>
        </div>
    )
}

export default Mainbody;

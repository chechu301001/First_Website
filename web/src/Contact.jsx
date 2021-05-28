import React, {useState} from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const formSubmit = (e) => {
        e.preventDefault();
        setData({
            fullname:"",
            phone:"",
            email:"",
            msg:"",
        });
        alert(`My name is ${data.fullname}. Mobile number is ${data.phone}. Email id: ${data.email} and here is what i want to say "${data.msg}"`);
    };
    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name :</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your full name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address :</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone number :</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter a valid phone number"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message :</label>
                                <textarea class="form-control" name="msg" value={data.msg} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary rounded-pill" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
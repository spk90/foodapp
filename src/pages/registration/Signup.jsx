import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar"; // Adjust the import path according to your project structure

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // Navigate
    const navigate = useNavigate();

    // User Signup State
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "user"
    });

    // User Signup Function
    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                phoneNumber: userSignup.phoneNumber,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            };

            const userReference = collection(fireDB, "user");
            await addDoc(userReference, user);

            setUserSignup({
                name: "",
                email: "",
                phoneNumber: "",
                password: "",
            });

            toast.success("Signup Successfully");
            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-red-50 px-8 py-6 border border-red-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-red-500'>
                            Signup
                        </h2>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                });
                            }}
                            className='bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder='Email Address'
                            value={userSignup.email}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    email: e.target.value
                                });
                            }}
                            className='bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Phone Number'
                            value={userSignup.phoneNumber}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    phoneNumber: e.target.value
                                });
                            }}
                            className='bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200'
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                });
                            }}
                            className='bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200'
                        />
                    </div>
                    <div className="mb-5">
                        <button
                            type='button'
                            onClick={userSignupFunction}
                            className='bg-red-500 hover:bg-red-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Signup
                        </button>
                    </div>
                    <div>
                        <h2 className='text-red'>Have an account <Link className='text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;

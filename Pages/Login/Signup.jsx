import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

export default function Register() {
    return (
        <div className='H'>
            
                <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                    <div className="row x-gap-120 h-1/1 items-center">
                        <div className="col-lg-6 h-1/1 relative md:h-300">
                            <div className="bg-image absolute-full-center md:bg-pos-top js-lazy" style={{ backgroundImage: 'url("/img/forms/bg.png")' }} />
                            <div className=" md:pl-0 absolute-full-center z-2">
                                <div className=" lg:pl-48 md:pl-0  md:pt-100">
                                    <div className="pt-60  md:pt-0">
                                        <div className="md:container sm:w-screen">
                                            <h1 className="text-4xl md:text-2xl text-white px-40">Welcome to<br />Every Image Tool</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 " style={{justifyContent:"center"}}>
                            <div className="md:container px-60">
                                <h1 className="text-4xl md:text-3xl">Register</h1>
                                <p className="mt-16">Already have An account? <Link className="decoration-none text-accent fw-600" href="register">Login here</Link></p>
                                <form className="contact-form row y-gap-32 pt-48" action="#">
                                    <div className="col-12">
                                        <input type="text" name="name" placeholder="User Name" />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" name="Email" placeholder="Email" />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="password" placeholder="Password" />
                                    </div>
                                  
                                    <div className="col-12">
                                        <button type="submit" name="submit" id="submit" className="button -md -accent -uppercase text-white">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
          
        </div>
    )
}
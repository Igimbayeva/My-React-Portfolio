import React from "react";

export const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="p-2">
                        <a className="navbar-brand" href="/">
                            <img src="/logo.png" height="30" alt="my logo" />
                        </a>
                    </div>
                    <div className="p-2 text-end">
                        <div className="d-inline-block mx-3 compact align-middle"></div>
                        <div className="d-inline-block mx-3 d-none d-lg-inline-block d-md-inline-block d-sm-inline-block">
                            <a href="/contact"> 
                                <button className="btn btn-outline-danger pt-2 px-4 compact">
                                    <span className="fontStyle1 fs-3"><i className="fas fa-pen-alt"></i> CONTACT ME</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="flex justify-between px-20 py-10 items-center bg-gradient-to-r from-red-700 to-red-400">
                <h1 className="text-xl text-gray-100 font-bold">My Portfolio</h1>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-6">
                        <a href="/"><li className="text-xl font-semibold text-gray-750">About</li></a>
                        <a href="/projects"><li className="text-xl font-semibold text-gray-750">Projects</li></a>
                        <a href="/resume"><li className="text-xl font-semibold text-gray-750">Resume</li></a>
                    </ul>
                </div>
            </nav>
        </>
    )
}

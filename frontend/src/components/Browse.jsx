import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]);

    return (
        <div className="bg-[#F8F3E6] min-h-screen"> {/* Soft Beige Background */}
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-2xl my-10 text-[#003366]">Search Results ({allJobs.length})</h1> {/* Royal Blue for Heading */}
                
                <div className="grid grid-cols-3 gap-6">
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Browse;
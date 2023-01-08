import {useState } from 'react'

export default function EdgeSelector() {


    const [leftHand, setLeftHand] = useState()
    const [rightHand, setRightHand] = useState()

    const edgeMap = [
            [10,8],
            [30, 25],
            [20, 15],
        ]

    return (
        <section name="edge-selector">
                <div className="bg-slate-700 rounded-md pt-8 pb-2 px-2 mt-4">
                    <div className="flex space-x-4 items-center">
                        <div className="bg-slate-600 flex flex-col space-y-4 w-48">
                            <div className="flex space-x-1 h-10">
                                <button onClick={()=> setLeftHand(10)} className="bg-slate-400 h-10 w-1/2 rounded-md">10</button>
                                <button onClick={()=> setLeftHand(8)} className="bg-slate-400 h-10 w-1/2 rounded-md">8</button>
                            </div>
                            <div className="flex space-x-1 h-10">
                                <button onClick={()=> setLeftHand(30)} className="bg-slate-400 h-10 w-1/2 rounded-md">30</button>
                                <button onClick={()=> setLeftHand(25)} className="bg-slate-400 h-10 w-1/2 rounded-md">25</button>
                            </div>
                            <div className="flex space-x-1 h-10">
                                <button onClick={()=> setLeftHand(20)} className="bg-slate-400 h-10 w-1/2 rounded-md">20</button>
                                <button onClick={()=> setLeftHand(15)} className="bg-slate-400 h-10 w-1/2 rounded-md">15</button>
                            </div>
                        </div>
                        <div>
                            <button className="bg-slate-500 h-12 w-24 rounded-md">Slot</button>
                        </div>
                        <div className="bg-slate-600 flex flex-col space-y-4 w-48">
                            <div className="flex space-x-1 h-10">
                                <button onClick={()=> setRightHand(10)} className="bg-slate-400 h-10 w-1/2 rounded-md">10</button>
                                <button onClick={()=> setRightHand(8)} className="bg-slate-400 h-10 w-1/2 rounded-md">8</button>
                            </div>
                            <div className="flex space-x-1 h-10">
                                <button onClick={()=> setRightHand(30)} className="bg-slate-400 h-10 w-1/2 rounded-md">30</button>
                                <button onClick={()=> setRightHand(8)} className="bg-slate-400 h-10 w-1/2 rounded-md">25</button>
                            </div>
                            <div className="flex space-x-1 h-10">
                                <button onClick={()=> setRightHand(15)} className="bg-slate-400 h-10 w-1/2 rounded-md">20</button>
                                <button onClick={()=> setRightHand(8)} className="bg-slate-400 h-10 w-1/2 rounded-md">15</button>
                            </div>
                        </div>
                    </div>
                </div>
                //
                
                //
                <div className="flex justify-between space-x-4 p-8 text-slate-300">
                    <div className="flex space-x-4">
                        <h3>Left hand</h3>
                        <p>10</p>
                    </div>
                    <div className="flex space-x-4">
                        <h3>Right hand</h3>
                        <p>10</p>
                    </div>
                </div>
            </section>
    )
}
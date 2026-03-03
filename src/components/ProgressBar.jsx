import React from 'react'

function ProgressBar({ total, paid, bgcolor="bg-green-500", height="h-2" }) {
	const percent = total > 0 ? Math.round((paid / total) * 100).toFixed(2) : 0;
    
    return (
        <div className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}>
            <div
                className={`${bgcolor} ${height} transition-all duration-500`}
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}

export default ProgressBar
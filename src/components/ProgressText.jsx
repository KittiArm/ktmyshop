import React from 'react'

function ProgressText({ total, paid }) {
	const percent = total > 0 ? Math.round((paid / total) * 100).toFixed(2) : 0;
    
    return (
        <span>≈ {percent}%</span>
    )
}

export default ProgressText
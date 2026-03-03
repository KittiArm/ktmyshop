import React from 'react'

function ProgressTextRatio({ total, paid }) {
	const percent = total > 0 ? Math.round((paid / total) * 100).toFixed(2) : 0;
    
    return (
        <span>
            {paid.toLocaleString()} / {total.toLocaleString()} ฿
        </span>
    )
}

export default ProgressTextRatio
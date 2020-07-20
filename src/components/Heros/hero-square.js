import React from 'react';

const HeroSquare = image => (
    <div className="hero-sqaure">
    <svg 
        version="1.1" 
        id="Layer_1" 
        className="parrallax-hero"
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 841.89 403.05" 
        preserveAspectRatio="xMinYMin meet" 
        style={{backgroundImage: `url(${image.source_url})`}}>
		<g>
		    <polygon className="st0" points="841.89,49.68 841.89,0 823.47,0 	"/>
			<path className="st0" d="M599.27,378.7c-5.95,2.23-12.18,3.28-18.41,3.24c-7.3-0.05-14.56-1.64-21.35-4.67
						c-12.54-5.81-22.22-16.31-27.05-29.23L431.69,76.17c-9.95-26.85,3.77-56.82,30.66-66.73L487.83,0H0v403.05h841.89V288.67
						L599.27,378.7z"/>
		</g>
	</svg>
	<svg className="blue-wot" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080"><defs></defs><title>Angel Shapes</title><path className="cls-1" d="M859,172.23C749.29,85.71,612.33,47.35,473.51,63.15c-138.89,16.19-263,85.7-349.76,195.39-47.67,60.27-37.31,147.82,23,195.58s148,37.74,195.59-22.94A243,243,0,0,1,506,339.73c65.29-8.82,129,10.26,180.33,51a245,245,0,0,1,40.39,344.05c-47.69,60.28-37.33,147.82,23,195.58a139.3,139.3,0,0,0,195.57-23C1031.91,797.77,1070.66,660.8,1054.36,522,1038.06,383,968.66,258.75,859,172.23Z"/></svg>
	<svg className="pink-zig" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080"><defs></defs><title>Angel Shapes</title><path className="cls-2" d="M380.5,561.58h.11l33.21,5.59,164.4,27.64L545,792.58a95.26,95.26,0,0,0,78.21,109.77l291.74,49a95.3,95.3,0,0,0,109.77-78.2c8.72-51.95-26.29-101.3-78.2-109.77L748.73,730.15,774,579.7l8-47.27a95.3,95.3,0,0,0-78.18-109.76L507.1,389.58l-1.05-.19,33.23-197.7A95.2,95.2,0,0,0,461.07,81.92H461l-291.58-49a95.29,95.29,0,1,0-31.61,188L335.5,254.08l-14.7,87.54L302.3,451.81a95.29,95.29,0,0,0,78.2,109.77Z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="square-yellow" id="Layer_1" data-name="Layer 1" viewBox="0 0 1080 1080"><defs></defs><title>Angel Shapes</title><path className="cls-9" d="M321.56,998.63a109.92,109.92,0,0,0,147,50.13l49.55-24.33,500.49-245.82a109.86,109.86,0,0,0,50.21-147L798.74,81.49A110.06,110.06,0,0,0,735.61,26a108.83,108.83,0,0,0-83.92,5.4L518.15,97,101.61,301.5A109.8,109.8,0,0,0,51.44,448.55ZM518.15,341.72,649.94,277,823.18,629.82l-305,149.84-47.8,23.47L297.07,450.3Z"/></svg>
</div>

);

export default HeroSquare
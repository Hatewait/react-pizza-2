import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
      <circle cx="291" cy="363" r="15" />
    </ContentLoader>
)

export default Skeleton

// import React from 'react';
// import Layout from '@/components/layout/Layout';
// import HomeOneBanner from '@/components/layout/banner/HomeOneBanner';
// import Agency from '@/components/containers/home/Agency';
// import PortfolioText from '@/components/containers/home/PortfolioText';
// import HomeOffer from '@/components/containers/home/HomeOffer';
// import HomeTestimonial from '@/components/containers/home/HomeTestimonial';
// import HomeBlog from '@/components/containers/home/HomeBlog';
// import HomeSponsor from '@/components/containers/home/HomeSponsor';
// import NextPage from '@/components/containers/home/NextPage';
// import CtaTwo from '@/components/containers/service-details/CtaTwo';
// import Head from 'next/head';

// const HomeDark = () => {
//   return (
//     <Layout header={1} footer={1} video={true}>
//       {/* <Head> */}
//         {/* <meta
//           name="title"
//           content="Top Local Designers for Custom Graphic Branding | Any Graphic Today"
//         />
//         <meta
//           name="google-site-verification"
//           content="EGzXF4NKX_smb9Rs_AjDjfc3oWbHLBXjGeY2aloiQNY"
//         />
//         <meta
//           name="description"
//           content="Elevate Your Brand with Top Local Graphic Designers at No Upfront Fee. 24/7 Exceptional Design Solutions Near You for Branding"
//         /> */}
//       {/* </Head> */}
//       {/* <HomeOneBanner /> */}
//       {/* <Agency />
//       <PortfolioText />
//       <HomeOffer />
//       <HomeBlog />
//       <CtaTwo /> */}
//       <h1>just test...working on it  </h1>
//     </Layout>
//   );
// };

// export default HomeDark;



// UI/UX Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceUiBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/ui.jpg';
import MiniUIImage from 'public/images/service/miniui.jpg';

import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
const HomeDark = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>Graphic Designer for UI/UX Designs | Any Graphics Today</title>
        <meta
          name="description"
          content="UI/UX Designs from high skilled designers at No Upfront Charge. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Graphic Designer for UI/UX Designs | Any Graphics Today"
        breadcrumb="UI/UX Designs"
      />
      <ServiceDetailsMain
        blogData={serviceUiBlog}
        path={HeaderImage}
        miniPath={MiniUIImage}
      />
      <UxProcess stepWorkData={serviceUiBlog} />
      <TeamMembers />
      <CtaTwo />
    </Layout>
  );
};

export default HomeDark;

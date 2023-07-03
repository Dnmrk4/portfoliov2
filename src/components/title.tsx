import Head from "next/head";


const IndexPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}|Danmark Mutai</title>
        <meta property="og:title" content="Danmark Mutai, danmarkmutai, danmark portfolio, photographer eldoret, dash the creative, dashthecreative" key="title" />
      </Head>
    </div>
  );
};

export default IndexPage;

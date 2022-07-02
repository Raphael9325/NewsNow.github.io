import Head from 'next/head';

export default function Meta({ title, keywords, description })
{
  return (
    <Head>
      <title>{ title }</title>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    </Head>
  )
}
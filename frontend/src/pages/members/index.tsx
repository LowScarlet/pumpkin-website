/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'
import Layout from '../../components/layout'
import styles from './Members.module.css'

const Members_Index: NextPage = () => {
  return (
    <>
    <Head>
        <title>Members</title>
    </Head>
    <Layout>
      <section className={`${styles['heroes']} p-4 p-md-5 text-bg-dark`}>
        <div className="container py- text-center">
          <h1 className="display-4">
            Looking for someone?
          </h1>
          <p className="lead my-3 text-white-50">
            Here you can find information about our members, but don't look for it too often because later you can be considered a stalker!
          </p>
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <InputGroup>
                <InputGroupText>
                  <i className="bi bi-search"></i>
                </InputGroupText>
                <Input placeholder="username" />
                <Button color="primary">
                  primary
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}

export default Members_Index

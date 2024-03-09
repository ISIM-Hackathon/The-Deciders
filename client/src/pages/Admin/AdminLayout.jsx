import React from 'react'
import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import StudentList from '../../components/college/StudentList'
import AlumniList from '../../components/college/AlumniList'
import JobList from '../../components/college/JobList'
import UnverifiedCollegeList from '../../components/dasboard/UnverifiedCollegeList'
import Navbar2 from '../../components/main/Navbar2'
import Footer from '../../components/main/Footer'

// Data
import verifiedStudentList from '../../data/verifiedStudentList'
import verifiedAlumniList from '../../data/verifiedAlumniList';
import unverifiedCollegeList from '../../data/unverifiedCollegeList'
import CollegeList from '../../components/admin/CollegeList'

const AdminLayout = () => {
    return (
        <>
            <Navbar2 />
            <Box pt={4} p={2} w={'full'} bg={'gray.100'}>
                <Flex flexDirection='column' >
                    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing='24px'>
                        <StudentList verifiedStudentList={verifiedStudentList} />
                        <AlumniList verifiedAlumniList={verifiedAlumniList} />
                        <CollegeList verifiedCollegeList={verifiedAlumniList} />
                        <JobList />
                    </SimpleGrid>
                    <Flex direction='column'>
                        <Box >
                            <Grid templateColumns={{ sm: "1fr", lg: "1.4fr 1.4fr" }} p={2} >
                                <UnverifiedCollegeList title={"Unverified College"} data={unverifiedCollegeList} />
                            </Grid>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}

export default AdminLayout
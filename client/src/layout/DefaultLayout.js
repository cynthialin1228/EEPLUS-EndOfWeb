import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLogin } from '../slices/loginSlice'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'

const DefaultLayout = () => {
  const pathname = useLocation().pathname.split('/')[1]
  const { isLogin } = useSelector(selectLogin)
  const noModal = ['forget', 'register_entry', 'reset_password', 'change_password']
  const [isModal, setIsModal] = useState(false)
  const { studentID } = useSelector(selectLogin)
  useEffect(() => {
    setIsModal(!noModal.includes(pathname) && isLogin)
  }, [isLogin])
  useEffect(() => {
    if (pathname == 'profile' && isLogin) {
      setIsModal(false)
    }
  }, [pathname])
  return (
    <>
      <CModal size="l" visible={isModal} onDismiss={() => setIsModal(false)} alignment="center">
        <CModalHeader onDismiss={() => setIsModal(false)}>
          <CModalTitle>請大家去新增專題教授</CModalTitle>
        </CModalHeader>
        <CModalBody>
          EE+推出新功能，讓大家可以在上面登錄自己跟過的專題教授啦~ 請點擊{' '}
          <a href={`/profile/${studentID}`}>此連結 </a> 新增您跟過的專題教授吧！
        </CModalBody>
        <CModalFooter>
          <CButton
            color="warning"
            onClick={() => {
              setIsModal(false)
            }}
          >
            已經填寫
          </CButton>
          <CButton
            href={`/profile/${studentID}`}
            color="primary"
            onClick={() => {
              setIsModal(false)
            }}
          >
            立即填寫
          </CButton>
        </CModalFooter>
      </CModal>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
          <AppHeader />
          <div className="body flex-grow-1 flex-column px-3">
            <AppContent />
          </div>
        </div>
        <div className="wrapper d-flex flex-column">
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout

import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="طريقة اللعب" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حاول تخمين كلمة الوِرد في 8 محاولات. سيتغيّر لون المربعات بعد كل محاولة
        لإظهار مدى قرب تخمينك من الكلمة.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ي" status="correct" />
        <Cell value="ق" />
        <Cell value="ط" />
        <Cell value="ي" />
        <Cell value="ن" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حرف الياء موجود في الكلمة في المكان الصحيح.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ي" />
        <Cell value="ت" />
        <Cell value="ح" status="present" />
        <Cell value="د" />
        <Cell value="ث" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حرف الحاء موجود في الكلمة ولكن في المكان الخطأ.{' '}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ج" />
        <Cell value="س" />
        <Cell value="ي" />
        <Cell value="م" status="absent" />
        <Cell value="ة" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حرف الميم غير موجود في الكلمة في أي مكان.
      </p>
    </BaseModal>
  )
}

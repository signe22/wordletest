export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['عمل عظيم!', 'رائع', 'أحسنت!']
export const GAME_COPIED_MESSAGE = 'تم نسخ اللعبة إلى الحافظة'
export const ABOUT_GAME_MESSAGE = 'حول هذه اللعبة'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'يجب أن تكون الكلمة مكونة من 5 حروف'
export const WORD_NOT_FOUND_MESSAGE = 'هذا التخمين ليس كلمة'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `حظاً أوفر في المرة القادمة!
  الكلمة الصحيحة كانت ${solution}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'إحصائيات'
export const GUESS_DISTRIBUTION_TEXT = 'توزيع التخمين'
export const NEW_WORD_TEXT = 'كلمة جديدة في'
export const SHARE_TEXT = 'شارك'
export const TOTAL_TRIES_TEXT = 'عدد المحاولات'
export const SUCCESS_RATE_TEXT = 'نسبة النجاح'
export const CURRENT_STREAK_TEXT = 'عدد مرات الربح المتتالي'
export const BEST_STREAK_TEXT = 'أفضل عدد مرات الربح المتتالي'

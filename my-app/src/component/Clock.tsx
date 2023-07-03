import React, { useState, useEffect, useLayoutEffect } from 'react'

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE=1000

// localstorageで使用するキー
const KEY_LOCALE='KEY_LOCALE'

enum Locale{
  US='en-US',
  JP='ja-JP',
}

const getLocaleFromString=(text:string)=>{
  switch(text){
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const savedLocale = localStorage.getItem(KEY_LOCALE)
  const[timestamp, setTimestamp] = useState(new Date())
  const[locale, setLocale] = useState(savedLocale || Locale.US)

  // タイマーのセットをするための副作用
  useEffect(() => {
    // タイマーのセット
    const timer = setInterval( () => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE )
    // コンポーネントのアンマウント時にタイマーをクリアする
    return()=>{
      clearInterval(timer)
    }
    // 初期描画時のみ実行する
  },[])

  //localStorageから値を読み込むための副作用
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    console.log(localStorage.getItem(KEY_LOCALE))
    if(savedLocale !== null){
      setLocale(getLocaleFromString(savedLocale))
    }
  },[])

  // localeが変化した時に、localstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
    // 依存配列にlocaleを渡し、localeが変化する度に実行するようにする
  },[locale])

  return (
    <div>
      <p>
        <div>
          <span id="currenttimelabel">現在時刻</span>
          <span>: {timestamp.toLocaleString(locale)}</span>
        </div>
        <select value={locale} onChange={(e)=>setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}
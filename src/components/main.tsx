import { initializeApp } from "firebase/app";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const profileRef = doc(db, "portfolio", "profiles");
const docSnap = await getDoc(profileRef);
console.log(docSnap.get("talk"));

export const Main = () => {
  return (
    <div className="contentsWrap max-w-5xl mx-auto w-full py-8 px-5">
      <header id="header" className="">
        <div className="profile flex w-full">
          {/* 왼쪽 */}
          <div className="w-40 h-40 profile_img_Wrap bg-black bg-opacity-10 border border-black border-opacity-30 rounded-full overflow-hidden">
            <img
              src={docSnap.get("imgURL")}
              alt="김경민 사진"
              className="w-full h-full object-cover"
            />
          </div>
          {/* 오른쪽 */}
          <div>
            <span className="profile_name">김경민</span>
            <button className="profile_contact">메일 보내기</button>
            <ul>
              <li>
                셍년월일 <span> 1993.08.10 </span>
              </li>
              <li>
                직무경력 <span> 2년 7개월 </span>
              </li>
              <li>
                게시글 <span> 0 </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

# 소개

![컨버스](https://github.com/Minminjamin/counBus/assets/122540708/841cc019-c89f-4b43-9639-d77b6e07fc75)

![image](https://github.com/Minminjamin/counBus/assets/122540708/5ad53f9d-f539-4741-b0ed-4aa5837968e9)
경남로봇고 학생들이 버스 시간을 알기 위해서는 버스 시간표 사진을 휴대폰에 저장해야된다는 문제점, 기숙사 외출 및 외박 정보를 편리하게 관리하고 싶다는 사감 선생님의 요청으로 만든 웹입니다.

학생들이 주로 모바일 환경에서 웹을 접속한다는 점과, 개발 시간을 고려해 반응형 웹보다 모바일 환경에서 접속을 가정하에 웹을 개발했습니다.

이 웹을 통해 40여명의 기숙사 학생들의 외출 및 외박 신청 겸 관리 프로세스를 개선했습니다.

경남로봇고 2023년 교내 창업 아이디어 경진대회에서 최우수상을 수상했습니다.

## 개발 기간

- 2023년 10월 31일 ~ 2023년 11월 9일 (10일)

## 목적

- 경남로봇고 학생들의 버스 시간표앱
- 디자이너와 figma를 통한 협업 경험
  - figma를 통한 웹 퍼블리싱 경험
- 에이블런 웹 프론트엔드 개발자 과정을 수강하며 배운 로그인 시 에러 메세지 출력 등의 기능 활용 및 복습

## 대표 기능

- 버스 시간표 확인 기능
  - 이전 시간의 버스 정보는 생략
- 사감 및 관리자 계정으로 접속 시 기숙사 생들의 외출 및 외박 데이터 확인 및 삭제, 월별로 Excel 다운로드 기능

## 사용한 기술

<img  src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=React&logoColor=white"> <img  src="https://img.shields.io/badge/sass-cc6699?style=for-the-badge&logo=sass&logoColor=white"> <img  src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=FIrebase&logoColor=white"> <img  src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white">

## 폴더 구조

```
 ┣ 📂 node_modules
 ┣ 📂 public
 ┃ ┣ 📂 db
 ┃ ┃ ┣ 📜 busTime.json
 ┃ ┗ 📂 image
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 Download
 ┃ ┃ ┃ ┣ 📜 Download.css
 ┃ ┃ ┃ ┗ 📜 Download.tsx
 ┃ ┃ ┣ 📂 LogoutLayout
 ┃ ┃ ┃ ┣ 📜 LogoutLayout.css
 ┃ ┃ ┃ ┗ 📜 LogoutLayout.tsx
 ┃ ┃ ┣ 📂 StudentsOutList
 ┃ ┃ ┃ ┣ 📜 StudentsOutList.css
 ┃ ┃ ┃ ┗ 📜 StudentsOutList.tsx
 ┃ ┣ 📂 libs
 ┃ ┃ ┗ 📜 Firebase.ts
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 ApplicationForm
 ┃ ┃ ┃ ┣ 📜 ApplicationForm.css
 ┃ ┃ ┃ ┗ 📜 ApplicationForm.tsx
 ┃ ┃ ┣ 📂 Bus
 ┃ ┃ ┃ ┣ 📜 Bus.css
 ┃ ┃ ┃ ┗ 📜 Bus.tsx
 ┃ ┃ ┣ 📂 Login
 ┃ ┃ ┃ ┣ 📜 Login.css
 ┃ ┃ ┃ ┗ 📜 Login.tsx
 ┃ ┃ ┣ 📂 Main
 ┃ ┃ ┃ ┣ 📜 Main.css
 ┃ ┃ ┃ ┗ 📜 Main.tsx
 ┃ ┃ ┣ 📂 Manage
 ┃ ┃ ┃ ┣ 📜 Manage.css
 ┃ ┃ ┃ ┗ 📜 Manage.tsx
 ┃ ┃ ┗ 📂 Menu
 ┃ ┃ ┃ ┣ 📜 Menu.css
 ┃ ┃ ┃ ┗ 📜 Menu.tsx
 ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 FirebaseData.ts
 ┃ ┣ 📜 App.scss
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 index.css
 ┃ ┗ 📜 index.tsx
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 tsconfig.json
```

- Next.js의 폴더 구조와 에이블런 웹 프론트엔드 개발자 과정에서의 폴더 구조를 참고
- 실제 page 폴더에는 라우팅되는 컴포넌트들을 넣음

# 문제 해결

## 권한이 다른 계정의 페이지 접속 문제

- 통학생 계정이 기숙사생 페이지에 접속되는 문제
- 학생 계정이 관리자 및 사감 페이지에 접속되는 문제
- 컴포넌트 마운트 시에 접속 권한을 가지고 있지 않은 계정은 특정 페이지로 이동

  - id 뒤의 고유 식별자로 기숙사생, 통학생, 축구부, 교사, 관리자 판별
  - 로직이 반복되지만 각 사용자마다 접속할 수 있는 페이지가 다르기에 custom hook으로 만들지 않음

  | 분류     | 식별자 |
  | -------- | ------ |
  | 통학생   | c      |
  | 기숙사생 | d      |
  | 축구부   | s      |
  | 관리자   | m      |
  | 사감     | t      |

  ```
  // Manage 컴포넌트에서 관리자와 사감이 아니면 접속을 막는 로직
  useEffect(() => {
  	const  auth  =  getAuth();

  	const  unsubscribe  =  onAuthStateChanged(auth, (user) => {
  		if (!user) {
  			navigate("/login");
  		}

  		if (user  &&  user.email) {
  			const  userId:  string  =  user.email?.split("@")[0].slice(-1);

  			if (userId  ===  "t"  ||  userId  ===  "m") {
  				return  null;
  			} else {
  				navigate("/menu");
  			}
  		}

  		return () => {
  			unsubscribe();
  		};
  	});
  }, []);
  ```

# 프로젝트 폴더 별 소개

## busTime.json

- 경남로봇고의 버스 시간표를 담은 데이터 포멧
  - 경남로봇고의 버스 시간표는 사진 형태로 되어 있기에 직접 json 형태로 데이터를 가공

## Firebase.ts

- Firebase의 sdk를 초기화한 파일

## FirebaseData.ts

- 기숙사 생들의 외출 및 외박 데이터의 type을 interface로 선언한 파일
  - 코드 재활용을 위해 FirebaseData라는 별도의 파일로 분리
  ```
  export  interface  FirebaseData {
  	class:  number;
  	come_time:  string;
  	document:  string;
  	from_name:  string;
  	out_time:  string;
  	parents_phone:  string;
  	place:  string;
  	reason:  string;
  	type:  string;
  	home_address?:  string;
  }
  ```

## Download.tsx

![ezgif-2-8798300c5d](https://github.com/Minminjamin/react_portfolio/assets/122540708/f1ea9b3b-00f3-4264-a68d-ae19a8ea9ec2)

- 기숙사 생들의 외출 및 외박 신청 데이터를 월별로 액셀로 다운 받을 수 있는 컴포넌트
  - 관리자 및 사감만 접속 가능
- 2023년 10월부터 지금 현재 월까지 자동으로 생성

  ```
  useEffect(() => {
  	const  startYear  =  2023;

  	const  date  =  new  Date();
  	const  endYear  =  date.getFullYear();
  	const  endMonth  =  date.getMonth() +  1;

  	const  months:  string[] = [];

  	for (let  year  =  startYear; year  <=  endYear; year++) {
  		const  startMonth  =  year  ===  startYear  ?  10  :  1; // year 가 startYear 와 같을 경우, 시작 월을 10으로 설정하고, 그렇지 않으면 시작 월을 1로 설정
  		const  maxMonth  =  year  ===  endYear  ?  endMonth  :  12; //현재 연도 year 가 endYear (현재 연도)와 같을 경우, 최대 월을 현재 월인 endMonth로 설정하고, 그렇지 않으면 최대 월을 12로 설정

  		for (let  month  =  startMonth; month  <=  maxMonth; month++) {
  			months.push(`${year}년 ${month}월`);
  		}
  	}

  	setYearDate(months);
  }, []);
  ```

- 해당 월의 다운 아이콘을 클릭 시 해당 월의 외출 및 외박 데이터를 다운 받을 수 있음

  - yyyy월 mm년 dd 형식으로 월의 정보를 가져오기 위해 문자열 메소드를 통해 yyyy-mm 형식으로 월 문자를 가공, 이후 where을 통해 해당 월의 데이터를 추출

  ```
  const  date  =  selectDate.split("년 ").join("-").split("월").join("");

  const  querySnapshot  =  await  getDocs(
  	query(
  		collection(firestore, "student_data"),
  		where("out_time", ">=", date),
  		where("out_time", "<=", date  +  "31")
  	)
  );

  const  data:  any  = [];

  querySnapshot.forEach((doc) => {
  	data.push(doc.data());
  });
  ```

  - exceljs 라이브러리를 통해 excel 파일 생성
    - forEach 문법을 통해 월의 데이터를 액셀 열에 삽입
  - saveAs 라이브러리를 통해 excel을 다운

## LogoutLayout.tsx

- 라우팅되는 거의 모든 페이지에서 로그아웃 버튼이 필요하기에 만든 Layout 역할의 컴포넌트
  - 이 컴포넌트를 통해 중복된 Logout 기능과 스타일 선언을 줄임
- Logout 버튼을 클릭 시 Login 페이지로 이동

## StudentsOutList.tsx

![ezgif-5-8e8614114f](https://github.com/Minminjamin/react_portfolio/assets/122540708/72429589-e624-4b83-a472-501ceb46f598)

- 기숙사 학생들의 외출 및 외박 정보를 보고 삭제할 수 있는 컴포넌트
  - 정보 삭제 시 다시 setState에 정보를 받아오는 것이 아닌 리로드 후 정보 fetching
- 하단의 다운로드 버튼을 누를 경우, Download 컴포넌트 출력

## ApplicationForm.tsx

![ezgif-5-7accbb480d](https://github.com/Minminjamin/Minminjamin/assets/122540708/f1e3a0e2-53df-47ef-b1ac-c2137873096e)

- 기숙사 학생들의 외출 및 외박 신청서를 작성하는 컴포넌트
  - 기숙사 학생들만 접근 가능한 컴포넌트
- 필수 입벽(\*) 요소를 다 입력해야만, form 제출 가능

  - 필수 입력(_)인 곳에 빈 칸일 경우, 최상단의 필수 입력(_) 빈칸으로 scroll
  - 빈칸인 부분은 모두 빨간색 box-shadow
  - 필수 입력(\*) 인 곳을 입력 완료해야 alert로 "정상적으로 신청서가 제출되었습니다." 메세지 출력

  ```
  const  onHandleEmailSubmit  = (e: React.FormEvent) => {
  	e.preventDefault();

  	let  isErr:  boolean  =  false;

  	const  isRequire:  FormField[] = [
  		// 필수 입력 정보를 담은 배열, 생략
  	];

  	isRequire.forEach((item:  FormField) => {
  		const  input  =  form.current?.elements.namedItem(
  			item.name
  		) as  HTMLInputElement;

  		//만약 빈칸이라면 .err 클래스 추가
  		//이를 통해 css의 bos-shadow 추가
  		if (input  &&  !input.value.trim()) {
  			isErr  =  true;
  			input.classList.add("err");
  		} else {
  			input?.classList.remove("err");
  		}
  	});

  	//최상단의 err 클래스로 smooth 하듯 scroll
  	if (isErr) {
  		const  firstErrFiled  =  form.current?.querySelector(".err") as  HTMLElement;
  		if (firstErrFiled) firstErrFiled.scrollIntoView({ behavior:  "smooth" });
  	} else {
  			if (form.current) {
  				// 정보를 firebase에 저장하는 로직, 생략
  			}
  		}
  };
  ```

## Bus.tsx

![image](https://github.com/Minminjamin/counBus/assets/122540708/6318f4db-9e47-4d0a-abc8-5c46830c6bd0)

- 경남로봇고의 버스 정류장 시간표를 보여주는 컴포넌트
- 이미 지나간 버스에 대해서는 정보를 출력하지 않음

  - filter 메서드를 통해 현재 시간과 버스 시간을 비교해 이미 지나간 시간에 대한 버스 정보는 출력하지 않음

  ```
  .filter((item:  Bus) => {
  	const  now  =  new  Date();
  	const  current  =  now.getHours() *  60  +  now.getMinutes();

  	//코드 작성의 편리함을 위해 비교 시간을 10월 30일로 함
  	const  busTime  =  new  Date(`2023-10-30T${item.time}`);
  	const  busDepartureTime  =
  		busTime.getHours() *  60  +  busTime.getMinutes();

  	return  busDepartureTime  >=  current; //분 단위로 변환해서 비교
  })
  ```

- 버스 시간표를 오름차순으로 정렬

  - json 파일의 시간대를 정렬하기 위해 sort 메서드를 사용해 오름차순으로 정렬

  ```
  .sort((a:  Bus, b:  Bus) => {
  	const  timeA  =  new  Date(`2023-10-30T${a.time}`);
  	const  timeB  =  new  Date(`2023-10-30T${b.time}`);

  	return  timeA.getTime() -  timeB.getTime();
  });
  ```

## Login.tsx

![ezgif-1-12f88a27f3](https://github.com/Minminjamin/counBus/assets/122540708/7c1bcf79-2a66-4865-bf33-4f9e96deaa86)

- 로그인을 담당하는 컴포넌트
  - 로그인이 되어 있거나, 로그인을 할 경우 접근 차단, 자신이 접속할 수 있는 페이지로 이동
- 로그인 창이 빈칸이거나 user 정보가 없을 때의 오류 핸들링
  - 에이블런의 포트폴리오 과정에서 수강한 Members 컴포넌트 err state를 통한 오류 출력 방법 응용
  - 만약 id나 비밀번호 둘 중 하나를 입력하지 않았을 경우, 확인 메세지를 해당 input 창 하단에 출력
  - 없는 사용자의 경우 id 혹은 비밀번호 확인 메세지를 password 하단에 출력

## Main.tsx

![ezgif-1-dbe906cb76](https://github.com/Minminjamin/counBus/assets/122540708/8d3b9fc3-bee9-4795-b91d-95e51eb24f78)

- 메인 컴포넌트
- css 애니메이션을 3초간 재생 후 페이지 이동
  - 만약 로그인이 되어 있다면 자신의 페이지로 이동
  - 로그인이 되어 있지 않다면 로그인 페이지로 이동

## Manage.tsx

- 관리자 및 사감만 접속할 수 있는 페이지(https://school-contest.vercel.app/manage)를 모아둔 컴포넌트
- isDown state가 참이면 Download 컴포넌트 출력, 거짓이면 StudentOutList 컴포넌트 출력

## Menu.tsx

![image](https://github.com/Minminjamin/counBus/assets/122540708/654445ae-bfd6-4914-8463-987a48bf8347)

- 통학생 및 기숙사생들이 버스 시간표 혹은 외출 및 외박 신청서를 작성하는 컴포넌트

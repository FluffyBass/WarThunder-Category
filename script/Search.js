let equipmentData = [
  { name: "M4 셔먼", br: 3.7, rank: 2, nation: "미국" },
  { name: "티거 I", br: 5.3, rank: 3, nation: "독일" },
  { name: "T-34", br: 3.3, rank: 2, nation: "소련" },
  { name: "처칠 Mk VII", br: 4.7, rank: 3, nation: "영국" },
  { name: "아리에테", br: 11.0, rank: 7, nation: "이탈리아" },
  { name: "르끌레르", br: 11.3, rank: 7, nation: "프랑스" },
  { name: "메르카바 Mk4", br: 11.0, rank: 7, nation: "이스라엘" },
  { name: "반드카논 1", br: 7.0, rank: 4, nation: "스웨덴" },
  { name: "ZTZ-99", br: 11.0, rank: 7, nation: "중국" },
]; //데이터들 저장하기
renderTable();

async function loadData() {
  const response = await fetch("mains.json");
  equipmentData = await response.json();
  renderTable();
} //mains.json에서 데이터 가지고와서 목록 업데이트 하기(사실 나중에 추가할거고, 지금은 추가 안함.)

function renderTable() {
  const br = document.getElementById("brFilter").value; //변수들 불러오기(드롭다운 목록들에서)
  const rank = document.getElementById("rankFilter").value;
  const nation = document.getElementById("nationFilter").value;
  const tbody = document.querySelector("#dataTable tbody"); //id가 dataTable인 요소에서 tbody를 빼옴=행 추가/초기화
  tbody.innerHTML = "";
  equipmentData.forEach((item) => {
    let brValue = parseFloat(item.br);
    let matchBR =
      !br ||
      (br === "1-3" && brValue >= 1 && brValue < 4) ||
      (br === "4-6" && brValue >= 4 && brValue < 7) ||
      (br === "7-9" && brValue >= 7 && brValue < 10) ||
      (br === "10-12" && brValue >= 10 && brValue < 13); //br(배틀레이팅)이 일치하는지 찾기
    let matchRank = !rank || item.rank.toString() === rank;
    let matchNation = !nation || item.nation === nation;
    if (matchBR && matchRank && matchNation) {
      //세 가지 목록이 모두 참(1)이 나온 목록의 정보만 가지고 오도록 필터링
      let row = `<tr>
        <td>${item.name}</td>
        <td>${item.br}</td>
        <td>${item.rank}</td>
        <td>${item.nation}</td>
      </tr>`; // 각각의 값 넣기
      tbody.innerHTML += row;
    }
  });
}

// 이벤트 자동 적용
document.getElementById("brFilter").addEventListener("change", renderTable);
document.getElementById("rankFilter").addEventListener("change", renderTable);
document.getElementById("nationFilter").addEventListener("change", renderTable);

// 데이터 로드
loadData();

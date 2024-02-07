# Title
> 이곳에는 MR 제목 포맷을 작성하면 됩니다. MR을 작성할 때 포맷을 복사해서 제목에 붙여넣고 이곳의 내용은 삭제하면 됩니다.
* #{jira issue no}, [{source branch}] : {MR description}
* 예시) #SQIM-32, [feature/dfsStatus] : 신예인이 이렇게 하고 싶대요.


<br /><br /><br /><br />


# :bow: Assignee
## :clipboard: Features
> 이곳에는 MR을 통해 적용될 기능 개발 목록을 작성하면 됩니다.
* 내용 작성
## :eyes: Assignee CheckList
> 이곳에는 assignee가 확인해야 되는 사항들의 목록을 작성하면 됩니다.
- [ ] source branch와 target branch 매핑이 올바른가요?
- [ ] add → commit → pull → push를 수행했나요?
- [ ] reviewer는 함께 개발한 FE/BE 1명, 함께 개발하지 않은 BE 1명을 지정했나요?
- [ ] MR CI test stage 통과했나요?
- [ ] 1개의 jira task에 대해서만 개발된 사항인가요?
- [ ] 더 이상 branch를 사용하지 않는 경우 삭제 옵션 추가했나요?


<br /><br /><br /><br />


# 🕵 Reviewer
## :yellow_heart: Reviewer Mindset
> 이곳에는 reviewer가 가지고 있어야 하는 마음가짐을 작성하면 됩니다.
* 코드 리뷰를 진행할 때는 개발한 사람의 의견을 무조건적으로 비판하지 않기
* 자기 자신에게 말하듯이 상대방을 배려하며 리뷰하기
## :eyes: Reviewer CheckList
> 이곳에는 reviewer가 확인해야 되는 사항들의 목록을 작성하면 됩니다.
- [ ] 컨벤션 위반 사항을 검토했나요?
- [ ] 클린 코드 관점에서 검토했나요?
- [ ] 더 효율적인 비즈니스 로직에 대해 검토했나요?
- [ ] 코드 문법이 올바른가요?
- [ ] 코드 리뷰 후 Approve 버튼을 눌렀나요?
- [ ] 잘못된 코드에 대한 코멘트를 남길 때 무엇이 잘못되었는지, 개선 사항은 무엇인지 명확히 작성했나요?
import React, { Component } from "react";
import Donor from "./Donor";
import Donee from "./Donee";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components'

export default class Landing extends Component {
  render() {
    return (
      <div>
    
      <Img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUSEhAVFRUXFRUVFRgVFRUVFRUVFxcWGBgVFRcYHSggGBolHhcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lIB8tLS0rLzUtLS0rLSstLy0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rKy0tLS0tLS0tLSstLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABJEAABAwIDBAcCCwcBBgcAAAABAAIDBBEFEiEGMUFRBxMiYXGBkaGxFCMyQlJik8HR4fAzQ3JzgpKyUxckNGN0whU1ZKKz0uL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAMxEAAgEDAwEGBAMJAAAAAAAAAAECAxEhBBIxQQUTIjJR4WFxgZEjsdEGFSRCRFJiofH/2gAMAwEAAhEDEQA/AO4IQhACEIQCIQhACEIQAhCEAFZfa3HhCwtadbK5xatEbd+p3fiuRbS4l1kxFzYalUVqlvCi6lC+WUm0Fc46X7R0PcN5/BUBO4eaer5rm54pi/Z7zp4BUxVkXM8yfr7yo8w4BSXDS/P3BNMZx5+5dI5Ib4tUOZvVgILu7gPzUbqyW35k+xdbiLEIt96cLdAnnRbvEr31XY8/vU7iLDcGhI5LUYFUOY4EG1/eqHqCHg8wrjCmHVp4ahVzd0dxR3XZPF/hEQDj2m6eI5q/XK9i64teDf8AO28LqUbrgHmraFTcrPoVVobXddT0hCFeUglSJUAIQhACEIQAhCEAqEiEAIQhACRCEAIQhACE0ahvP2FJ8Jbz9iAeXiR4aCTuC8fCW8/YqjaQzSRFkABJ33Ibp5qJOyuSldmXx/Gg4udffo3wXMH1Re6V19509y3VbsriDwbNZfQftBu4qj/2eYkAQGx6m/7QfgsahJ3bRq3xWEYqWQOeeQ/QXhr8z7ctPxWsi6MsTF+xFcm/7UeXBeafoxxRtyWxX/mj8FZsZzvRmZ38P1YKwoKXrCB3XKux0Z4n9GL7UbvRW2F7B10YOZsd7aWkB+5cyjK2DqMo3yzHVADXPtwafdZRXRWjaPq3PmStrVdHuIOLiGxa85PyXiXo7xA/Ni+b+84DyUKEvQOcb8mLZD2md5Kmw0mZh05j0IWpZ0dV+nZi0v8AvPyUqDYSubfSPe795wPkocJehKlH1Mh8H+La7i1w9CpkdmPDt17LRN2Dr8rm2i1II+M5eS8zbBYg4bor8PjPyUd3J9Ce8j6i4O/q57cLgjwXWcHlzRju9y51S7JVjXMcQzTQ2fw9FvcFY6Jtn7+7VTQhKM8o4rSjKOGW6E117eaXr281tMo4hN9e3n70rZWnigHEIQgBCEIAQhCAEIQgBIhCAEIQgBCEICsfvPiUiWTefEpEJBKkSoAQhCggEIQgBCEIAQhCEioSJUAIQhAKhIlQAlSJUAq9RfKHivC9xfKHihBNSpEqkAhCEAIQhACEIQCIQhACEIQAhCRAVsm8+JSJX7z4lIoJBCEIBVk8brZI8ZoGCRwjljqGuYHHIS1hcCW7ibhuq1TyQCQLmxsL2ueAvwXKcfxfEpK6hlfhnVSsdKIWOnY4Sue1oc0uFg2w4nfdAjpWN4iKWnkncxzxG0uLW2zEDlfTv8l7wrEI6mGOeO+SRoc24sbHgRzG7yWXkmxaeGdlXSU8ULqecHLIXyBxjdl3OIOqkdF0mbCafu60ek0gQGrQkXiaZrGlz3BrQLlziGtA5knQIQOIVFFtjhr3hja2EuJsO1YE9zj2T6q7c4AXJsBqSdABzKEnpCzu022NLQxtc53WPeAYo4yCXg6B19wb38eAKy9TtrjEbfhD8Layn0JDhIHgfWdfs+JZZAdLWb2MxaeoNWydwc6GrlibZob8WLZRpvtrrv3KzwHF462nZURXyvB0O9rgbOa7vBH3qh2J/wCMxQf+qB9Q66A16VYDGds6ioqPgmFMEjx8uY2MbQN+W+mX6xvfcAbgreQh2VuYgusMxGgLra2vwugPaVIhAKvcXyh4heF6i+UPEICchCFJAqEiVACEIQAhCEAiEIQAhIodfisEH7SVrTy3u/tGqhtLLJSbwiYgrLVW28DTZkT3cNbNH3r2zahx3wj+4/gqXqKa6ly09R9C0fvPiUir48ZjdvBHtUyGoY/5LgfYfQruNWEuGcypTjyhxCWyRdlYLH7Z/wDmGFf9RL/ixbBY/bX/AI7C/wDqX/4sQGmxT9hL/Kk/xK4zsFT1+IMFJHVvp6eBpc50dwS6RznAEtcC4kl3GwDd19/Y8aNqWc/8mX/ByxnQrAG4e93F07r+DWRgD3+qAlbG4nUU81RQVs2d0DBNHK4kl8HziSdTa7TqSdSNbLnG0+1766qa+VhdTMdeKAucxr2i+V0hGuZ2hJ4C4HM6vbaB8uM9TF8ubDZo7cyWVJA8y1oXNJaYuBczM4NjjL7g5mOuI+rIsNc24fRtxBAglFvgsjMlTPNAx0Db/FgNZmnmJEcccmUuYGgPf2ToGbjddI2BLpcDlbI4vBbUsGYl1mZSMtzw36LnVUWgsomjP1IcMjQXGor5LNcdN7IzZovvEVvn6dC6PnZcDmvvZ8Kv3ENJQMh9EOzbDGK6Voc4ktp76hjWktc8Dg7NmaOQB+kumSRNe0scLtcC1wO4gixB8lmOjFlsJpvCQ+s0h+9XmM1wp6aaY/u4nv8ANrSQPWykgx3Q9dtPUx3JaypcGn+ho/7QfNY7Esck+F1tIyZkDaireJJnkjLGwuaW6agHW/PdoCSt10Q0Zjw0PO+WWSTXkCIx/wDHfzTXR7RxTx1/WxMka7EKjR7WuFrMO4jvUEmg2QwikpaZraVzXtdYulBa4yu5lzdPADQK7VFg+ylLSTump88eduV0QeepJuDnyH52lhrYAmw1V6pIFQhCAVeo948QvK9R7x4hATkIQpIBCEIBUJEqAEIQgPKR7w0Ek2ABJPIDeUqptp8SZDEYzcula5oA0sLWc4nuuuZSUVdnUYuTsjPV20k0wOR3VsJNsujrcLu338FmJm3dcm5T9SQ0WDjZQI3WO9eTKUpO7PWjCMcIlR2c8DcfVXQidbSx9iooJWtcHAE24gEq1GMR8XAeOirZZ0HJHyN3wkj6uvu1XllezMBq08iCHehXtmLxfSHqldURyDtWd4qDqPyL/DKy4HbzA8L6hWqzeDU8cZzNsQTYkOJPtN1pGnRetQbccnl6qKU8Aq3FMFiqJaeV5cHU8hkZlIAJItZ1xqNAdLblZIVxmPEsYc0tcLgggjmCLEKLg+FQ0kDYIG5Y2XygkuOpLiSXEkm5KmoQFDNs0x2JR4h1hzMidGWWuCSCA4OvpYOcLW103cWcZ2Gw6rkMskFpDq50bnMLjzcGmxPfa60iRAUuBbKUNCc1PAGv3Z3Fz324gOcSWjuFgn6DAqeCGSBjCI5XSOe0ucbmUWeAb3AtporNIgI+GUEdNCyGJuVjG5Wi5JA7ydSU/NC17Sx7Q5rgWua4XDgdCCDvC9JUA3SU7ImNjjYGMaA1rWiwaBwAUHAMEjomyNjc4iSaSd2cgkOfa4FgNAAFZJUAJUiVACVIke+wugPaq6vaCCI2Bzuvubu8yqvGMV3ZjZh08+F/as3PMC+7Bc8gLnzA3LLXruGEbtPpVJbpG1dj8z/kAN8rn1OnsUeWrqHa9a7yNvYFmoJ6o6COw+sQPdqpANRxkaPAE+24WF15vls1KhBPCRsMPxgghsuvJ3/2/FXi5/Tue3R2verzDcUdHZrtW8uIHd+C00NV0mZa+m6xNIhAN0L0DAKhIhAIsJ0hEiohtxjcD5OH4rdLne2la/4Y5jjZrWM6vwIuT/dceSo1L/DNGmX4hQ1h00OvsXilgZvdqe9LVSANzONlXNfLIbMjNvpO7LfxPkF5tsHomhwuQNvmO9WjZWcSCFmMMwrrb55nAg/MsAPUFWrMDj4zy/3NHuaubHTJs9HTPGscZ/pbf1VNVYAA+8FR1Y4tdd7Se65uPVO1uC6fE1Dg7k6zmn0sfapGCYRUucete0tG7s6k+Z0XdOm5PBEpxgrstcAwgts5z8xF9Bo2+661EbbCyi4fSiNoA4aBTF6dOG2Njy61RzlcEIQrCoEiEIASpEIASJUiAEqRKgFQuabfYviMFXk+FCmpzFK+B8bA4yPZGHGKUuPZdmBAI07bdDwx/wANq58OmrJsQqSWzsgjjErgxzi1r3ZgDwaSbDkhNju4qY8/V525wMxZmGcDdfLvt3p1c36G8BEcD6x7BnlJbGSNRED2j3Zng+IYF0hCBVGrahjG9o+SfcVS19O8uJtcIyY85KDG5gWm9mtO8HlyVdR1MbOyCGju3L1jGEzXsxzTe57RJLfTeqKDZ6R7/jZnAcmAN9puvLrJt+I9mntUVtNV/wCLRN+cPVeDjUH+o31Uaj2epW/u83e9znX8ibK3kp4SBdjDb5N2t7PhyVAeAo6+OXc4HwUtrtVDZG21rD0TzY8uoJHdvC5yS0jUYViQIax2/QA+4FW6xsEnaaeThfyIWyXqaWo5xs+h5mppqMrrqCEIWozHlc46TmWqqdw3mNzT4B2n+R9VqNr9rKfDIeslN3H9nGCMzz9zRxPv3LkNXtlJiZdNI1rMhLY2tvo05Xak6k96preRmqhSkrTfH5mjBsLJoShu8qqpcVGmY2UyJnwg9ndxK81xsb9xEr8XbT9oGwPDiT3KJS7RzVL8kTLAC7nH5rRvJA/FZ/E8NkdUmMntZ8gJ3anQHkNVsqPChRRvbvOVji4i2awuR/Dcq6NONrlUqkjS4NhdmhziXEgHXcL9y09HDlCbw+MdWw82NPqApoC3QgorB585uTyewlXlKuzgVVuJY3DTz08D82eoc5sdgCAWgElxvoNQNL71ZLn/AEjEx1+FTH5LagsJ5Fz4fuB9EB0BCRc+2x2glOK0VFTTEEP+PDSbHrLAMfbfZmZ1juzNPJAe8R6To45CIqOWaIS9SJQQ1skn0YhY5/UcOYvqtndoKevi6yBxNjZ7HDK+N30Xt4eOoPArieAVz4YWyvbYYdFI2Ju/NW1Ej8hI45Rrbh1A5pqmZNTziKGWWMuMVLUujk7ckznZ5g0nd1d8hOlsoJ+WbwTY+hb8OKF8/wCGiBkxmpJHCX4fTxU3aJlkjdnzvltYOa8tbpbS5B0IXXKjGpRjEdGMvVGldM7TtZs7gDm5dnd3lSRY0iVIs5tNtSKOppKfq85qZQwnNbI0uYzNu1N3jTk0oCq6YqQPw3PbWKaN3k68ZHh2x6BctbnkoIKSIZny1c0tgCTfq4YmEgcLmTX6pXd9qMMNXRzwDe+Mhv8AGO03/wBwC510JYXd89U4fJtAy+8ONnyAjgQOr9SoJR1WkpmxRsjYAGsa1jQBYBrQALDyTyRCkgCqzFZSBYKzKbfECgRisShkIvGSOYGmYePqsViGIVEbyBE+/I6k967FNTCxsFj8SoHyGzSA/NbXcb6Wvw3qipSTybKNd+V8GJoq/EJXZWMA/idYDxVqcOxbgYD4yPH/AGKvxLFH0NQ+KQESMNnC2h4ggjeCCD5qRTbdt46LFKDviJs3R9S1paTEW6u6o24Ne72XaArCLEJGkCWGRvflLm/3NuFW0+1sT3CzgbrRUda1wFj7Vnkmmd3ViVT1Ac249oWpwCQuhBJ0zOt4DT33WaAuFqsJjywRj6oPrr962aNPc/kYtU1t+pMQkQvRMB8r7f48+urZJHE2uQwfRjBOVo8tfEleMGbkiv8ASJP3BV88Ofudz/FXWGhoiAO8CyprcHv6mi4u6WOnw+B5dMb71stmq7s2/RWEqxyT9Bi5iBuVknDcsGSLsybtnVAumN99gPG4UzD8emqKFsbzdzOwXfOLbXbc+dr9yxeJ1Znd9W9yeZ/XvV1s+0hjjwO7+m+vt9iuUNtPJ3GN02/ofQmFf8PF/Kj/AMApah4Sf93h/lR/4BTFqXB5T5FQkSoQKqXa7Z5mIUxgc7I4EPjeBcskFwHW4ixIPcSrlKgOfzDafJ1IFLe2X4QD2jwzanR3f1fks/shs4YceEbpTM+CJ00z9bGaRtrXOp0mabnUkE6bl1bFMQjpoZJ5TZkbS93Ow4DmTuHeVkejCikeyfEJxaWskzgfRhF8gHdqbc2hiEmY6QMINBWCrDXPppJDPkHyGVgY7IXj6JcQ6/EZxyvhnSua3Qkm0kYcSLGR4Dql+Y6F2VzY+8EEa2X0hX0UdRE6KVgex4s5p4j7jxBG4hYWj6Ni17IZarrKFkj5mwZMrnPNgBK4fLFhv8QAAUFyn6I9lHOc2vmaQxt/g7T84kWM1vo20bz38AToKp2TaWLNp1lCWM73B8jiB32aVuWtAAAFgNABoABuACz+1uyrK/q3iV0M8JLopWalt7GxFxcXAO8EW7yCIuXs8zI2Oe9wa1oLnOcQGtaN5JO4LisuMjE8ep5G36ts0TYr6ExxOMhcRwLiHO8CAdy02IbAYlVkNq8V6yMEGwjIvY78gIbm5E3srmh2Ehp6mklhdljphMS0i75ZZW5esc/du7tMoAsNwkv8fZVmnd8Dcxs4sW9YLtIBBLTyuLi/u3ihwPFMVfOyOXDIqaMlzpX9awl2mro2tNyS62+/itBjeFx1cD4JQ4tda+VxY67SHCzhu1A7lj+j3ZZ8Uz6mppHxSgZYTLVCokDXAh4OQBtrWsTzOgQg36VIlQAlSIQHlwUR1G0vBt84H2qavErsrS7kCfQXQIwvTjg8HwdtaXBkrXNi/mtcTZvi3tOvyzd1uJWubBdF6cdomVcNEIndhwlkc3k/sNAPeO16rnOFS5uyeHtCqqLqbVTlDwTVmixgpTpZX2FYxNTkZhmb7U1AwBoK81MqyN7sMuSsdEw7HmStGV3kmNmdsHU9fLDJJenMrmnMdIz9Jp4C+8eazmAxC4dayzWG1JkfLKfnyvd6k/iu9KvG0en2dRhXnKlNYkn/AN+aPqEFC5Fg3SPLTwRwuiDywZcxOpAJsPIWHkhb9rMU+wdYpNKN163RyE6J+Ccjcf14JXMB1SinaQuT3I05p+EeM4O8fcoFUyLflue8k+xe6iQMG8+pVbLOXHeVFkZtVUpww4xv8kes91f0sloxb6A/P2rNhX9Bq0D6qqrcHlzbcT6JwQ/7rB/Ji/wapq4rLt/iEDY2MfHlDGtF4wSABYa+ACgu6U8VF+1Dp/yR+K6jNNHlyptM7yhcIpOlPFHOsXQ/ZfmnZOlHEw62aG38r811vRzsZ3NC4jS9J+IuGrovsvzS4r0pV8eUMdFm4kx3HvXPeK9jru3a52uWNrgWuaHNIsQQCCORB3hK1oAAAsBoANAAOAXFaTpPr3MDi6Lkfi+PPep1Zt/iBYHxPi+sDGDY8xruUOtFOzHdStc66lXBj0qYqCQXQ3v/AKP/AOlIZ0n4mdc0P2X5rpzSJhRlLg7ihcdg6Ra9wvni+zH4pl/STiTTZxi8o94571EaifBppdn1anla+52hC4+zpGrzxj+z/NOt6Qq/nH/Z+a7ubY/s/q5cbfv7HW0q5A/pEr+cf2f5pB0i1/OP7P8ANLj9wav/AB+/sdgQuLVvSXiLLEGK19fix+KWs6SsRa0Oa6L7Mfio3FL7G1K3ceHnPsdpQuKnpKxHJmzR7v8ATHPVeJuk3EWsvnjvpb4tqbg+xtQldtcX59jtyZq/2b/4He4rjcXSRiOS5fH9m1H+0PEHtIMjLEEaRs4+Sm5bDsPUtrMfXl/oYnaW7mR8gXD1yn7iqGJ7mEOHBaurgEjC3jvb4jcszpucPuKPJv7X034+/wDu/NGjoMUa5m9NT1oLtHAeJVRFTR/TePRSYqeEa2Lv4j9wVPcq5ihpak+bL6/oXpxVxjMcJu5ws5/zYwd9ubrJuBoY0NbuAt496iMm0tuHAAW9nBPNcVZTgocH0GhoQoLDu3yySXoTF0Kzez0d7KITlPxEu4qM6JI0OG665PmIzlF+LglS02ihvgsnRI9PNNxqh1KMKnCsQxGrmgdYNHgq57VPpTYHuVVXymerStBv0PWKOuR4qrd2rqVUydtNxw3dm4cfBVxwjyZZYzRsLe0d53fivVQ65uNydnOYkgeCju3WXd7u5zxgcpXa2HNN1bszz3BAdlK900dwb8d6cZDzgSGTLpwI9quKCqI37iNfcVSV7LKZh77taTzsq6kbxudQdnYZxeMNk03aFeYH6KZXx3a3ncjyVax2UrqLvElPbK5aU8pB/WqlvZmbbzb3dyr43gi6mxutbvVbw7o9CjO2UJBJrZToioE5tKpMEi1Rd0fVaOtdZHJNy8N3pyVNxKTXLzEfFW/FnuKIu1CE5if7Mrzhf7OxUMySj/EuPrEbDfi7frVQqt98o5Ak+SsMlg5vdcKorpO1pyUGLWy2U19v9kvr/iwpMclgAqqO50UpkgGikro6h8v0sWkblRYpBlkPI9oee/2q0a5MV8eZl+I18uP67lKL9bHvqNuqyVbCVLjbzPoogT0Z0Unj0ZWZPjAbuT7XWso0OtlKGpKHs0eMHq7kIF0KDUQ4HtKf6sIQpMWne6ORtzAo0hshCFVdWWBI9+q9xutdCFxIyTXgY3WDc4L3SOuLFCFV/KeFLzDc77O03X0Uumpg5wI3EFKhcywjmOWQK1mXMe+yahly2HmUIVscxOHyOVrswup2Ax5mf1C368kIVdTEDqHmHsUtG5rd/ZJP9Rv7lUzEE6JUJT8qZMuRymOlu5WkLOJ3b0qFzPk06d5Gpx2giF+pQhXw8qPo9M2ooml17L0xIhdnsRd8kfFT2PRLQDs+SEKOpR/VP5DsguL9xCykz7uHohCk8ntx2UPj7EuF9gV5jdcoQoMKk/CTTKTopUUlwhCk9OhN7ipnaA4gbl7pzqhClnnRxVx6k+AWClsZxQhD3dPFWPWS+qEIXRpUE1c//9k=" alt=''/>
        
        
        <Switch>
          <Route path='/Donor' component={Donor} />
          <Route path='/Donee' component={Donee} />
          <Route path='/Categories' component={Categories} />
        </Switch>
      </div>
    );
  }
}
const Img = styled.img`
  height: 100vh;
  width: 100vw;
  margin:none;
  

   

 
`

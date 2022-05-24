module fmodule
    implicitnone 
contains
    subroutine fast_reverse(a,n)
        integer, intent(in) :: n
        real, intent(inout) :: a(:)

        a(1:n) = a(n:1:-1)
    end subroutine fast_reverse
end module fmodule